// import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main= ()=>  {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    
  return (
    <div className='main'>
      <div className="nav">
        <p>VerbiAI</p>
        <img src={assets.user_icon} alt=""/>
      </div>
      <div className="main-container">

        {!showResult
        ?<>
         <div className="greet">
            <p><span>Hello, TUSHAR...</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest better placement plan for upcoming holidays</p>
                <img src={assets.compass_icon} alt=""/>
            </div>
            <div className="card">
                <p>Briefly describe the concept of Authentication & Authorization</p>
                <img src={assets.bulb_icon} alt=""/>
            </div>
            <div className="card">
                <p>How to deploy the code on the Github using Git commands</p>
                <img src={assets.code_icon} alt=""/>
            </div>
            <div className="card">
                <p>How AI leads the country in upcoming year 2050</p>
                <img src={assets.message_icon} alt=""/>
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt=""/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt=""/>
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
            </div>
        </div> 
    }

       
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your Query'/>
                <div>
                    <img src={assets.gallery_icon} alt=""/>
                    <img src={assets.mic_icon} alt=""/>
                    <img onClick={()=>onSent()} src={assets.send_icon} alt=""/>
                </div>
            </div>
            <p className="bottom-info">VerbiAI can display inaccurate info, including about people, so double-check its response. Your privacy and VerbiAI Apps </p>
        </div>
      </div>
    </div>
  )
}

export default Main
