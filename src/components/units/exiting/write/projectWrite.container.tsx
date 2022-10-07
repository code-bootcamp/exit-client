import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  isModalVisibleState,
  modalState,
  tagsState,
} from "../../../commons/store";
import { FETCH_BOARDS } from "../../main/main.queries";
import { FETCH_BOARD } from "../list/projectsList.queries";
import ProjectWriteUI from "./projectWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./projectWrite.queries";
import type { DatePickerProps } from "antd";

const initialInputs = {
  title: "",
  description: "",
};

export default function WriteContainer(props: any) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [modal, setModal] = useRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const resetSavedTagsState = useResetRecoilState(tagsState);
  const router = useRouter();
  let calDate = "";
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [inputs, setInputs] = useState(initialInputs);
  const [bail, setBail] = useState(50000);
  const [address, setAddress] = useState("");
  const [totalMember, setTotalMember] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [categories, setCategories] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tags, setTags] = useRecoilState(tagsState);

  // 수정 상태일 때, 모집기술 데이터 받아서 저장하기
  useEffect(() => {
    if (props.isEdit) {
      const tags = props?.data?.fetchBoard?.tags?.map((el: any) => el.name);
      setTags(tags);

      if (props?.data?.fetchBoard?.closedAt !== undefined) {
        setCloseDate(
          moment(props?.data?.fetchBoard?.closedAt).format("YYYY-MM-DD")
        );
      }

      if (props?.data?.fetchBoard?.startAt !== undefined) {
        setStartDate(
          moment(props?.data?.fetchBoard?.startAt).format("YYYY-MM-DD")
        );
      }
      if (props?.data?.fetchBoard?.endAt !== undefined) {
        setEndDate(moment(props?.data?.fetchBoard?.endAt).format("YYYY-MM-DD"));
      }

      if (props?.data?.fetchBoard?.categories !== undefined) {
        setCategories(props?.data?.fetchBoard?.categories?.[0]?.name);
      }
    }
  }, [props.isEdit, props.data]);

  // 언마운트될때 모집기술 지우기
  useEffect(() => {
    return () => {
      resetSavedTagsState();
      resetModalState();
    };
  }, []);

  const onChangeInputs = (e: any) => {
    const _inputs = {
      ...inputs,
      [e.target.id]: e.target.value,
    };
    setInputs(_inputs);
  };

  const onChangeKeyword = (e: any) => {
    setKeywords(e.target.value);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFileUrl = fileUrl;
    // newFileUrl = fileUrl;
    setFileUrl(newFileUrl);
  };

  const onChangeBail = (e: any) => {
    setBail(e.target.value);
  };

  const onChangeAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const onChangeTotalMember = (newValue: any) => {
    setTotalMember(newValue);
  };

  const onChangeFrequency = (newValue: any) => {
    setFrequency(newValue);
  };

  const onChangeCategories = (e: any) => {
    setCategories(e.target.value);
  };

  const onChangeClosedAt: DatePickerProps["onChange"] = (date, dateString) => {
    setCloseDate(dateString);
  };

  const onChangeRangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
    // console.log(dateString);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.boardImage?.url.length) {
      setFileUrl(props.data?.fetchBoard.boardImage.url);
    }
  }, [props.data]);

  const onClickWrite = async () => {
    if (moment(startDate).diff(moment(closeDate), "days") < 0) {
      Modal.error({
        content: "모집 마감일은 프로젝트 시작일보다 이전이어야 합니다.",
      });
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: inputs.title,
            description: inputs.description,
            totalMember: Number(totalMember),
            bail: Number(bail),
            address: address,
            frequency: Number(frequency),
            closedAt: closeDate,
            startAt: startDate,
            endAt: endDate,
            boardImage: { url: fileUrl },
            tags: tags,
            keywords: keywords,
            categories: [categories],
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      Modal.success({ content: "프로젝트가 등록되었습니다." });
      router.push("/exiting");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickTagsEditing = () => {
    setIsModalVisible(true);
    setModal("isEditingTags");
  };

  const onClickClose = () => {
    setIsModalVisible(false);
    resetModalState();
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrl);
    const defaultFiles = props.data?.fetchBoard.boardImage.url;
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateBoardInput: any = {
      boardImage: {},
      keywords: [],
      categories: [],
      tags: [],
    };
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.description) updateBoardInput.description = inputs.description;
    if (totalMember) updateBoardInput.totalMember = totalMember;
    if (bail) updateBoardInput.bail = bail;
    if (address) updateBoardInput.address = address;
    if (frequency) updateBoardInput.frequency = frequency;
    if (closeDate) updateBoardInput.closedAt = closeDate;
    if (keywords) updateBoardInput.keywords = keywords;
    if (categories) updateBoardInput.categories = categories;
    if (isChangedFiles) {
      updateBoardInput.boardImage.url = fileUrl;
    } else {
      updateBoardInput.boardImage.url = defaultFiles;
    }
    if (tags) updateBoardInput.tags = tags;
    if (startDate) updateBoardInput.startAt = startDate;
    if (endDate) updateBoardInput.endAt = endDate;

    if (moment(startDate).diff(moment(closeDate), "days") < 0) {
      Modal.error({
        content: "모집 마감일은 프로젝트 시작일보다 이전이어야 합니다.",
      });
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.projectId),
          updateBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.projectId) },
          },
        ],
      });
      Modal.success({ content: "수정이 완료되었습니다." });
      router.push("/exiting");
      // console.log(result.data?.updateBoard);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProjectWriteUI
        onClickWrite={onClickWrite}
        onChangeInputs={onChangeInputs}
        onChangeBail={onChangeBail}
        onChangeAddress={onChangeAddress}
        onChangeTotalMember={onChangeTotalMember}
        onChangeFrequency={onChangeFrequency}
        onChangeCategories={onChangeCategories}
        onChangeClosedAt={onChangeClosedAt}
        onChangeRangeDate={onChangeRangeDate}
        onChangeFileUrl={onChangeFileUrl}
        onChangeKeyword={onChangeKeyword}
        fileUrl={fileUrl}
        categories={categories}
        address={address}
        frequency={frequency}
        totalMember={totalMember}
        closeDate={closeDate}
        calDate={calDate}
        isEdit={props.isEdit}
        data={props.data}
        onClickUpdate={onClickUpdate}
        onClickTagsEditing={onClickTagsEditing}
        onClickClose={onClickClose}
        isModalVisible={isModalVisible}
        tags={tags}
        modal={modal}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
}
