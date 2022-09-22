import { useEffect, useRef, useState } from "react";
import ProjectWriteUI from "./projectWrite.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  UPLOAD_BOARD_IMAGE,
} from "./projectWrite.queries";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";
import { DatePickerProps } from "antd";
import _ from "lodash";
import moment from "moment";

export default function ProjectWrite(props: any) {
  useEffect(() => {
    console.log(props.data?.fetchBoard);
    if (props.data !== undefined) {
      setIsEdit(true);
      if (props.data?.fetchBoard.boardImage.url) {
        setImageUrl(props.data?.fetchBoard.boardImage.url);
      }

      if (props.data?.fetchBoard.totalMember) {
        setTotalMember(props.data?.fetchBoard.totalMember);
      }

      if (props.data?.fetchBoard.frequency) {
        setFrequency(props.data?.fetchBoard.frequency);
      }

      if (props.data?.fetchBoard.address) {
        setAddress(props.data?.fetchBoard.address);
      }

      if (props.data?.fetchBoard.categories.name) {
        setCategories(
          props.data?.fetchBoard.categories.map((e: any) => e.name)
        );
      }

      if (props.data?.fetchBoard.startAt) {
        setProjectPeriod(moment(props.data?.fetchBoard.startAt));
      }

      if (props.data?.fetchBoard.closedAt) {
        setRecruitment(moment(props.data?.fetchBoard.closedAt));
      }

      reset({
        title: props.data.fetchBoard.title,
        description: props.data.fetchBoard.description,
        keywords: props.data?.fetchBoard.keywords.map((e: any) => e.name),
        bail: Number(props.data.fetchBoard.bail),
        address: address, // radio 버튼
        frequency: Number(frequency), // 슬라이더
        totalMember: Number(totalMember), // 슬라이더

        // // tags: [...tags] || ["Java", "Mysql"], // 구현 중 하드코딩
        // tags: ["Java", "Mysql"], // 구현 중 하드코딩

        categories: [categories],

        startAt: projectPeriod,
        // endAt: props.data.endAt || "2022-09-16", // 달력
        closedAt: recruitment,
      });
    }
  }, [props.data]);

  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useState(false);

  const [keywords, setKeywords] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [projectPeriod, setProjectPeriod] = useState("");
  const [recruitment, setRecruitment] = useState("");

  const [frequency, setFrequency] = useState(1);
  const [totalMember, setTotalMember] = useState(1); // slider value

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, formState, trigger, reset } = useForm({
    mode: "onChange",
  });

  const onClickImage = () => {
    // 파일태그를 클릭해줘!
    fileRef.current?.click();
  };

  // 모집인원
  const onChangeTotalMember = (totalMember: number) => {
    setTotalMember(totalMember);
  };

  // 모임빈도
  const onChangeFrequency = (frequency: number) => {
    setFrequency(frequency);
  };

  // 카데고리
  const onChangeCategories = (event: any) => {
    console.log("radio  Categories checked", event.target.value);
    setCategories(event.target.value);
  };

  // 주소
  const onChangeAddress = (event: any) => {
    console.log("radio  Address checked", event.target.value);
    setAddress(event.target.value);
  };

  // 이미지 미리보기
  function onChangeFile(event: any) {
    const file = event.target.files[0];
    // console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      setFile(file);
    };
  }

  const onChangeRecruitment: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(dateString);
    setRecruitment(dateString);
  };

  const onChangeProjectPeriod: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(dateString);
    setProjectPeriod(dateString);
  };

  // const updateDate = (recruitment, dateString) => {
  //   setRecruitment();
  // };

  const onClickSubmit = async (data: any) => {
    await createBoard({
      variables: {
        createBoardInput: {
          title: data.title,
          totalMember: Number(totalMember),
          description: data.description,
          bail: Number(data.bail),
          address: address,
          frequency: Number(frequency),
          startAt: projectPeriod[0],
          endAt: projectPeriod[1],
          closedAt: recruitment,
          boardImage: { url: imageUrl },
          // tags: [...tags] || ["Java", "Mysql"], // 구현 중 하드코딩
          tags: ["Java", "Mysql"], // 구현 중 하드코딩
          keywords: [data.keywords],
          categories: [categories],
        },
      },
    });
    router.push("/exiting");
  };

  const onClickUpdate = async (data: any) => {
    setIsEdit(true);
    let myImageUrl = "";
    if (file) {
      const result1 = await uploadBoardImage({
        variables: {
          image: [file],
        },
      });
      myImageUrl = result1.data?.uploadBoardImage || "";
      // console.log(myImageUrl)
    } else {
      // 기존 사진값 유지하기
    }

    const result = await updateBoard({
      variables: {
        boardId: String(router.query.projectId),
        updateBoardInput: {
          title: data.title,
          totalMember: Number(totalMember),
          description: data.description,
          bail: Number(data.bail),
          // address: address,
          frequency: Number(frequency),
          // startAt: data.startAt || "2022-09-16",
          // endAt: data.endAt || "2022-09-16",
          // closedAt: "2022-09-16",
          boardImage: { url: myImageUrl },
          // // tags: [...tags] || ["Java", "Mysql"], // 구현 중 하드코딩
          // tags: ["Java", "Mysql"], // 구현 중 하드코딩
          keywords: [data.keywords],
          categories: [categories],
        },
      },
    });
    router.push("/exiting");
    console.log(result);
  };

  const onClickCancel = () => {
    router.push("/exiting");
  };

  const onClickRecruitment = () => {
    setIsOpen(true);
  };

  // 모달 오픈
  const onClickRecruitmentModal = () => {
    setIsOpen(true);
  };

  return (
    <ProjectWriteUI
      onClickSubmit={onClickSubmit}
      onClickCancel={onClickCancel}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      totalMember={totalMember}
      onChangeTotalMember={onChangeTotalMember}
      address={address}
      onChangeAddress={onChangeAddress}
      frequency={frequency}
      onChangeFrequency={onChangeFrequency}
      onChangeCategories={onChangeCategories}
      categories={categories}
      onChangeFile={onChangeFile}
      imageUrl={imageUrl}
      isOpen={isOpen}
      recruitment={recruitment}
      onChangeRecruitment={onChangeRecruitment}
      onClickUpdate={onClickUpdate}
      isEdit={isEdit}
      onClickRecruitmentModal={onClickRecruitmentModal}
      onClickRecruitment={onClickRecruitment}
      onClickImage={onClickImage}
      fileRef={fileRef}
      onChangeProjectPeriod={onChangeProjectPeriod}
    />
  );
}
