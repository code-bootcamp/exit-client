import { useState } from "react";
import ProjectWriteUI from "./projectWrite.presenter";
import type { RadioChangeEvent } from "antd";
import Router from "next/router";


export default function ProjectWrite(){
    const [ value, setValue ] = useState(1)
    const [ address, setAddress ] = useState(1)

    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    }

    const onChangeAddress = (e: RadioChangeEvent) => {
        setAddress(e.target.address)
    }

    const onClickCancel = () => {
        Router.push("/projects")
    }
    const onClickCreate = () => {
        Router.push("/projects")
    }

    return <ProjectWriteUI
        onChangeRadio = {onChangeRadio}
        onChangeAddress = {onChangeAddress}
        onClickCreate = {onClickCreate}
        onClickCancel = {onClickCancel}
        address ={address}
        value = {value}
    />
 };
