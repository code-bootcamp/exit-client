import { ChangeEvent, useRef, useState } from "react";
import ProjectWriteUI from "./projectWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPLOAD_BOARD_IMAGE } from "./projectWrite.queries";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useSetRecoilState } from "recoil";
import { Calendar } from "react-calendar";

export default function ProjectWrite(props: any){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])
    const [address, setAddress] = useState("")
    const [file, setFile] = useState()
    const [imageUrl, setImageUrl] = useState("");
    // const [projectPeriod, setProjectPeriod] = useState(new Date())
    // const [recruitment, setRecruitment] = useState(new Date())

    const [projectPeriod, setProjectPeriod] = useState([])
    const [recruitment, setRecruitment] = useState([])

    const [frequency, setFrequency] = useState(1)
    const [totalMember, setTotalMember] = useState(1) // slider value
    
    const [createBoard] = useMutation(CREATE_BOARD)
    const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);

    const { register, handleSubmit, formState, trigger, reset } = useForm({
        mode: "onChange"
    })

    // 모집인원 슬라이더
    const onChangeTotalMember = (totalMember: number) => {
        setTotalMember(totalMember)
    }

    const onChangeFrequency = (frequency: number) => {
        setFrequency(frequency)
    }

    const onChangeCategories = (event: any) => {
        setCategories(event.target.value)
    }

    const onChangeAddress = (event: any) => {
        setAddress(event.target.value)
  
    }

    function onChangeFile(event) {
        const file = event.target.files[0];
        console.log(file);
    
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
        setImageUrl(data.target?.result);
        setFile(file);
        };
      }

      const onClickRecruitment = () => {
        console.log("열렸니?")
        // setIsOpen(true)
      }

      // 모달 오픈
      const onClickRecruitmentModal = () => {
        setIsOpen(true)

      }

      const onChangeRecruitment = () => {
        console.log(recruitment)
        const newRecruitment = moment(recruitment).format("YYYY-MM-DD")
        setRecruitment(newRecruitment)
      }

      // 입력 후 모달 꺼짐
      const onCompleteRecruitmentPeriod = (data) => {
        setRecruitment(data.recruitment)
        setIsOpen(false)
        console.log("모달 꺼짐")
      }
 
    const onClickSubmit = async (data: any) => {
        let myImageUrl = "";
        console.log(file)

        if (file) {
            const result1 = await uploadBoardImage({
              variables: {
                image: [file],
              },
            });
            console.log(result1)
            myImageUrl = result1.data?.uploadBoardImage ||"";
            console.log(myImageUrl)
          }

        await createBoard({
            variables: {    
                createBoardInput: {
                    title: data.title,
                    totalMember: Number(totalMember), 
                    description: data.description,
                    bail: Number(data.bail),
                    address: address,
                    frequency: Number(frequency),
                    startAt: data.startAt || "2022-09-16",
                    endAt: data.endAt || "2022-09-16",
                    closedAt: "2022-09-16",
                    boardImage: { url: myImageUrl },
                    // tags: [...tags] || ["Java", "Mysql"], // 구현 중 하드코딩
                    tags: ["Java", "Mysql"], // 구현 중 하드코딩
                    keywords: [data.keywords],
                    categories: [...categories]
            }},
        })
        router.push("/projects")
        console.log("다 올라감");
    }


    const onClickCancel = () => {
        router.push("/projects")
    }


    return <ProjectWriteUI
        onClickSubmit = {onClickSubmit}
        onClickCancel = {onClickCancel}
        data = {props.data}
        reset = {reset}
        register = {register}
        handleSubmit = {handleSubmit}
        totalMember = {totalMember}
        onChangeTotalMember = {onChangeTotalMember}
        address = {address}
        onChangeAddress = {onChangeAddress}
        frequency = {frequency}
        onChangeFrequency = {onChangeFrequency}
        onChangeCategories = {onChangeCategories}
        categories = {categories}
        onChangeFile = {onChangeFile}
        imageUrl = {imageUrl}
        onClickRecruitmentModal = {onClickRecruitmentModal}
        onCompleteRecruitmentPeriod = {onCompleteRecruitmentPeriod}
        isOpen = {isOpen}
        recruitment = {recruitment}
        onChangeRecruitment={onChangeRecruitment}
        onClickRecruitment={onClickRecruitment}
    />
 };
