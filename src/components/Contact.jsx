import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errorName, setErrorName] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  //Funções

  const validate = () => {
    let error = false

    setErrorName(null)
    setErrorEmail(null)
    setErrorMessage(null)

    if (form.name == "") {
      setErrorName("Preencha o campo de nome!")
      error = true
    }

    if (form.email == "" || form.email.indexOf("@") == -1) {
      setErrorEmail("Preencha o campo de nome!")
      error = true
    }

    if (form.message == "") {
      setErrorMessage("Preencha o campo de nome!")
      error = true
    }

    return !error
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setLoading(true);

    emailjs.send("service_59zdq3t", "template_ayxarus", {
      from_name: form.name,
      to_name: "Matheus Alves",
      from_email: form.email,
      to_email: 'matpr.a98@gmail.com',
      message: form.message
    },
      "zKJnC4F8qvUYrZVml"
    )
      .then(() => {
        setLoading(false)
        alert('Obrigado, eu vou respondê-lo de volta assim que possivel')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error)

        alert("Something went wrong")
      })
    }
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual seu nome?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errorName &&
              <span className='text-red-600 font-medium mt-6'>Digite um nome</span>
            }
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual seu endereço eletrônico?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errorEmail &&
              <span className='text-red-600 font-medium my-4'>Digite um email válido</span>
            }
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que você quer falar comigo?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errorMessage &&
              <span className='text-red-600 font-medium my-6'>Digite uma mensagem</span>
            }
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");