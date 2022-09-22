import { useMutation } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_BOARDS } from "../../main/main.queries";
import { FETCH_BOARD } from "../list/projectsList.queries";
import WriteUI from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";

const initialInputs = {
  title: "",
  description: "",
};

export default function WriteContainer(props: any) {
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
  const [keywords, setKeywords] = useState([]);

  const onChangeInputs = (e: any) => {
    const _inputs = {
      ...inputs,
      [e.target.id]: e.target.value,
    };
    setInputs(_inputs);
    console.log(_inputs);
  };
  const onChangeKeyword = (e: any) => {
    setKeywords(e.target.value);
    console.log(keywords);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFileUrl = fileUrl;
    // newFileUrl = fileUrl;
    setFileUrl(newFileUrl);
    console.log(fileUrl);
  };

  const onChangeBail = (e: any) => {
    setBail(e.target.value);
    console.log(bail);
  };
  const onChangeAddress = (e: any) => {
    setAddress(e.target.value);
    console.log(address);
  };
  const onChangeTotalMember = (newValue: any) => {
    setTotalMember(newValue);
    console.log(totalMember);
  };
  const onChangeFrequency = (newValue: any) => {
    setFrequency(newValue);
    console.log(frequency);
  };
  const onChangeCategoires = (e: any) => {
    setCategories(e.target.value);
    console.log(categories);
  };
  const onChangeClosedAt = (date, dateString) => {
    setCloseDate(dateString);
  };
  const onChangeRangeDate = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
    console.log(dateString);
  };
  useEffect(() => {
    if (props.data?.fetchBoard.boardImage?.url.length) {
      setFileUrl(props.data?.fetchBoard.boardImage.url);
    }
  }, [props.data]);
  const onClickWrite = async () => {
    // try {
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
          tags: ["Java", "Mysql"], // 구현 중 하드코딩
          keywords: [keywords],
          categories: [categories],
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
    router.push("/exiting");
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrl);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.boardImage.url);
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateBoardInput: any = {
      boardImage: {},
    };
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.description) updateBoardInput.description = inputs.description;
    if (totalMember) updateBoardInput.totalMember = totalMember;
    if (bail) updateBoardInput.bail = bail;
    if (address) updateBoardInput.address = address;
    if (frequency) updateBoardInput.frequency = frequency;
    if (closeDate) updateBoardInput.closeDate = closeDate;
    if (keywords) updateBoardInput.keywords = keywords;
    if (categories) updateBoardInput.categories = categories;
    if (isChangedFiles) updateBoardInput.boardImage.url = fileUrl;

    console.log(inputs.title);

    const result = await updateBoard({
      variables: {
        boardId: String(router.query.projectId),
        updateBoardInput: {
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
          tags: ["Java", "Mysql"], // 구현 중 하드코딩
          keywords: [keywords],
          categories: [categories],
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.projectId) },
        },
      ],
    });
    router.push("/exiting");
  };

  return (
    <>
      <WriteUI
        onClickWrite={onClickWrite}
        onChangeInputs={onChangeInputs}
        onChangeBail={onChangeBail}
        onChangeAddress={onChangeAddress}
        onChangeTotalMember={onChangeTotalMember}
        onChangeFrequency={onChangeFrequency}
        onChangeCategoires={onChangeCategoires}
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
      />
    </>
  );
}
