// components/Contact.js
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    // Handle form submission (e.g., send email)
    console.log(data)
    reset()
  }

  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input
            {...register('name', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input
            {...register('email', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            {...register('message', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
