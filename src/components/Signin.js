import './Signin.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./AdobeStock_120766551.jpeg";


function Signin({ handleSignInSuccess }) {
    const initialValues = { mailAddress: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate(); // useHistoryフックを使って履歴を取得

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        // ログインの実際の処理を行う部分
        // この例では、単純にメールアドレスとパスワードが入力されていることをチェックして、成功時にリダイレクトするようにしています。
        if (formValues.mailAddress && formValues.password) {
            // サインイン成功時の処理（例：サインインが成功したと仮定して、/search ページにリダイレクトする）
            handleSignInSuccess();
            navigate("/search");
        }


    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if(!values.mailAddress) {
        errors.mailAddress = "メールアドレスを入力してください。";
        } else if (!regex.test(values.mailAddress)) {
        errors.mailAddress = "正しいメールアドレスを入力してください。"
        }
        if(!values.password) {
        errors.password = "パスワードを入力してください。";
        } else if (values.password.length < 4) {
        errors.password = "４文字以上１５文字以下のパスワードを入力してください。";
        } else if (values.password.length > 15) {
        errors.password = "４文字以上１５文字以下のパスワードを入力してください。";
        }
        return errors;
    };

    return  (
        <div className="fromContainer" 
        style={{
        background: `url(${background}) center`,
        backgroundSize: 'cover'
        }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign in</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                    <input type="text" placeholder="xeats@gmail.com" name="mailAddress" onChange={(e) => handleChange(e)} />
                    </div>
                    <p className="errorMsg">{formErrors.mailAddress}</p>
                    <div className="formField">
                    <input type="text" placeholder="Your password" name="password" onChange={(e) => handleChange(e)} />
                    </div>
                    <p className="errorMsg">{formErrors.password}</p>
                    <button className="submitButton">Sign in</button>
                    {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className="msgOK">Passed</div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Signin;
