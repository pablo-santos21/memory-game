import React from 'react';

const Login = () => {
  return (
    <div>
      <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg flex flex-col p-4 lg:p-8 justify-center gap-8 text-center items-center justify-center">
        <div>
          <h1 className="text-lg text-gray-400 uppercase tracking-wide">
            Login
          </h1>
        </div>
        <div className="flex">
          <form className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Nome
              </p>
              <input type="text" placeholder="Digite seu nome"></input>
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Quantos segundos vc quer ?
              </p>
              <input type="number" placeholder="120"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
