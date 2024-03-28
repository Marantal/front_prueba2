import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
//PRUEBA DE LOGIN
const Login = () => {
    const [password, setPassword] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (captchaValue) {
            // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
        } else {
            alert('Completa el captcha antes de enviar el formulario');
        }
    };

    return (
        <div style={{ 
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f4',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <div style={{ 
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                width: '300px',
                maxWidth: '90%',
                textAlign: 'center'
            }}>
                <h2 style={{ color: '#333' }}>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="correo">Correo electrónico:</label><br />
                    <input type="email" id="correo" name="correo" required /><br />

                    <label htmlFor="contrasenia">Contraseña:</label><br />
                    <input 
                        type="password" 
                        id="contrasenia" 
                        name="contrasenia" 
                        value={password}
                        onChange={handlePasswordChange}
                        minLength={8} 
                        required 
                    />
                    {password.length > 0 && password.length < 8 && (
                        <p style={{ color: 'red' }}>La contraseña debe tener al menos 8 caracteres</p>
                    )}
                    <br />

                    {/* Agregamos el captcha */}
                    <ReCAPTCHA
                        sitekey="6Ld_u5cpAAAAAEGsXF9vf25kl49qBRpQua14mNT4"
                        onChange={handleCaptchaChange}
                    />
                    <br />

                    <input type="submit" value="Iniciar sesión" style={{ 
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        cursor: 'pointer'
                    }} />
                </form>
                <br />
                <p><a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>¿No tienes una cuenta?</a> <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>Regístrate aquí.</a></p>
                <p><a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>¿Has olvidado tu contraseña?</a></p>
            </div>
        </div>
    );
};

export default Login;


