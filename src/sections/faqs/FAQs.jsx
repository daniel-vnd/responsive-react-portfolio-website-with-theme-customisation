import './faqs.css'
import faqs from './data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. 
        Ckick to toggle  the answer, and if you still have some more questions, shoot me a message from the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id } faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs
