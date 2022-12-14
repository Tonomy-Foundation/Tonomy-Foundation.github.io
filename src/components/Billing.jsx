import { apple, bill, google } from '../assets';
import styles, { layout } from '../style'; 

const Billing = () => (
    <section id="product" className={layout.
    sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src="https://res.cloudinary.com/droaf0tqk/image/upload/v1667828734/bill_kfqzw7.png" alt="billing" className="w-[100%] h-[100%] relative z-[5] hover:scale-110 transition duration-300 ease-in-out"/>

        <div className="absoulute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absoulute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> idenity services & digital authorization.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          SSI technology allows making this happen - your data stays private with you, 
          <br/>but you are recognized as a human being by singing your transaction using SSI
          
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src="https://res.cloudinary.com/droaf0tqk/image/upload/v1667828724/apple_mostqa.svg" alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"/>
            <img src="https://res.cloudinary.com/droaf0tqk/image/upload/v1667828726/google_vepsj6.svg" alt="play_store" className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-110 transition duration-300 ease-in-out"/>

          </div>

      </div>

    </section>
  )


export default Billing