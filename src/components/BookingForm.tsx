"use client";

import React, { useState } from "react";

const services = [
  {
    id: 1,
    name: "Corte Clássico",
    price: "R$ 45",
    duration: "45 minutos",
  },
  {
    id: 2,
    name: "Barba",
    price: "R$ 35",
    duration: "30 minutos",
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: "R$ 70",
    duration: "1 hora e 15 minutos",
  },
  {
    id: 4,
    name: "Platinação",
    price: "R$ 120",
    duration: "2 horas",
  },
  {
    id: 5,
    name: "Hidratação",
    price: "R$ 50",
    duration: "45 minutos",
  },
  {
    id: 6,
    name: "Design de Sobrancelha",
    price: "R$ 25",
    duration: "20 minutos",
  },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-zinc-900/95 p-8 rounded-xl shadow-2xl max-w-md w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-amber-100 mb-2">
          {step === 1
            ? "Escolha o Serviço"
            : step === 2
            ? "Selecione a Data e Hora"
            : "Seus Dados"}
        </h3>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          {services.map((service) => (
            <button
              key={service.id}
              className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-left transition-all"
              onClick={() => setStep(2)}
            >
              <h4 className="text-amber-100 font-semibold">{service.name}</h4>
              <p className="text-amber-50/80 text-sm">{service.duration}</p>
              <p className="text-amber-100 mt-2">{service.price}</p>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(7)].map((_, i) => (
              <button
                key={i}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-amber-100"
                onClick={() => setStep(3)}
              >
                {new Date(Date.now() + i * 24 * 60 * 60 * 1000).getDate()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["10:00", "11:00", "14:00", "15:00"].map((time) => (
              <button
                key={time}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-amber-100"
                onClick={() => setStep(3)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="space-y-4">
          <div>
            <label className="block text-amber-100 mb-2">Nome</label>
            <input
              type="text"
              className="w-full p-3 bg-zinc-800 rounded-lg text-amber-100"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-amber-100 mb-2">Telefone</label>
            <input
              type="tel"
              className="w-full p-3 bg-zinc-800 rounded-lg text-amber-100"
              placeholder="(00) 00000-0000"
            />
          </div>
          <button className="w-full bg-amber-100 text-zinc-900 py-3 rounded-lg hover:bg-amber-200 transition duration-300">
            Confirmar Agendamento
          </button>
        </form>
      )}

      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-amber-100 hover:text-amber-200"
          >
            Voltar
          </button>
        )}
      </div>
    </div>
  );
}
