"use client"
import TextArea from '@/components/textArea/TextArea'
import TextInput from '@/components/textInput/TextInput'
import { sendNodeEmail } from '@/serverFunctions/handleForm'
import { consultFormSchema, consultForm } from '@/types'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import styles from "./styles.module.css"
import { retreiveFromLocalStorage, saveToLocalStorage } from '@/utility/saveToStorage'

export default function ConsultForm() {
    const initialFormObj: consultForm = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }
    const [formObj, formObjSet] = useState<consultForm>({ ...initialFormObj })
    type consultFormKeys = keyof consultForm

    type moreFormInfoType = {
        [key in consultFormKeys]: {
            label?: string,
            placeHolder?: string,
            type?: string,
            required?: boolean
            inputType?: "input" | "textarea",
        }
    }
    const [moreFormInfo,] = useState<moreFormInfoType>({
        "firstName": {
            label: "First Name",
            placeHolder: "Enter your first name",
        },
        "lastName": {
            label: "Last Name",
            placeHolder: "Enter your last name",
        },
        "email": {
            label: "Email",
            placeHolder: "Enter your email address",
        },
        "phone": {
            label: "Phone Number",
            placeHolder: "Enter your phone number",
        },
        "message": {
            label: "Message",
            placeHolder: "Enter your message here",
            inputType: "textarea"
        },
    });

    const [checkedForSave, checkedForSaveSet] = useState(false)

    const [formErrors, formErrorsSet] = useState<Partial<{
        [key in consultFormKeys]: string
    }>>({})

    function checkIfValid(seenFormObj: consultForm, seenName: keyof consultForm, schema: typeof consultFormSchema) {
        //@ts-expect-error can check name here
        const testSchema = schema.pick({ [seenName]: true }).safeParse(seenFormObj);

        if (testSchema.success) {//worked
            formErrorsSet(prevObj => {
                const newObj = { ...prevObj }
                delete newObj[seenName]

                return newObj
            })

        } else {
            formErrorsSet(prevObj => {
                const newObj = { ...prevObj }

                let errorMessage = ""

                JSON.parse(testSchema.error.message).forEach((eachErrorObj: Error) => {
                    errorMessage += ` ${eachErrorObj.message}`
                })

                newObj[seenName] = errorMessage

                return newObj
            })
        }
    }

    //read save from storage
    useEffect(() => {
        checkedForSaveSet(true)

        const seenConsultForm: consultForm | null = retreiveFromLocalStorage("consultForm")
        if (seenConsultForm === null) return

        formObjSet({ ...seenConsultForm })
    }, [])

    //save form to storage
    useEffect(() => {
        if (!checkedForSave) return

        saveToLocalStorage("consultForm", formObj)
    }, [checkedForSave, formObj])

    async function handleSubmit() {
        try {
            if (!consultFormSchema.safeParse(formObj).success) return toast.error("Form not valid")

            await sendNodeEmail({
                sendTo: "squaremaxtech@gmail.com",
                replyTo: formObj.email,
                subject: `Customer Consult from ${formObj.firstName} ${formObj.lastName}`,
                text: `
                ${Object.entries(formObj).map(eachObjEntry => {
                    const eachObjKey = eachObjEntry[0]
                    const eachObjValue = eachObjEntry[1]

                    return `${eachObjKey}: ${eachObjValue} \n`
                })}
                `
            })

            toast.success("Sent!")

            formObjSet({ ...initialFormObj })

        } catch (error) {
            toast.error("Couldn't send")
            console.log(`Couldn't send`, error);
        }
    }

    function getCorrectField(eachKey: consultFormKeys) {
        return (
            <>
                {moreFormInfo[eachKey].inputType === undefined || moreFormInfo[eachKey].inputType === "input" ? (
                    <TextInput
                        name={eachKey}
                        value={`${formObj[eachKey]}`}
                        type={moreFormInfo[eachKey].type}
                        label={moreFormInfo[eachKey].label}
                        placeHolder={moreFormInfo[eachKey].placeHolder}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            formObjSet(prevFormObj => {
                                const newFormObj = { ...prevFormObj }
                                newFormObj[eachKey] = e.target.value
                                return newFormObj
                            })
                        }}
                        onBlur={() => { checkIfValid(formObj, eachKey, consultFormSchema) }}
                        errors={formErrors[eachKey]}
                    />
                ) : moreFormInfo[eachKey].inputType === "textarea" ? (
                    <TextArea
                        name={eachKey}
                        value={`${formObj[eachKey]}`}
                        label={moreFormInfo[eachKey].label}
                        placeHolder={moreFormInfo[eachKey].placeHolder}
                        onInput={(e) => {
                            formObjSet(prevFormObj => {
                                const newFormObj = { ...prevFormObj }
                                //@ts-expect-error can write e.target.value
                                newFormObj[eachKey] = e.target.value
                                return newFormObj
                            })
                        }}
                        onBlur={() => { checkIfValid(formObj, eachKey, consultFormSchema) }}
                        errors={formErrors[eachKey]}
                    />
                ) : null}
            </>
        )
    }

    return (
        <form className={styles.form} action={() => { }} >
            <h2>Contact us</h2>

            {Object.entries(formObj).map(eachEntry => {
                const eachKey = eachEntry[0] as consultFormKeys

                // if (eachKey === "firstName" || eachKey === "lastName") return null

                return (
                    <React.Fragment key={eachKey}>
                        {getCorrectField(eachKey)}
                    </React.Fragment>
                )
            })}

            <button className='mainButton'
                onClick={handleSubmit}
            >Submit</button>
        </form>
    )
}
