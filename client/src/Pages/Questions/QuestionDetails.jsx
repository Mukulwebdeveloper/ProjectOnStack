import React from 'react'
import { useParams, Link } from 'react-router-dom'
import uparrow from '../../assets/arrow-up.png'
import downarrow from '../../assets/arrow-down.png'
import './Question.css'
import  Avatar  from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {

    const { id } = useParams()
  console.log(id);
    var questionList = [{
        id: '1',
        votes: 3,
        upvotes: 3,
        downvotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java",'nodejs','reactjs','mongodb'],
        userPosted: "Mukul",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
          answerBody: 'Answer',
          userAnswered: 'kumar',
          answerOn: "jan 2",
          userId: 2,
        }]
    },
    {
     id: '2',
     votes: 1,
     upvotes: 3,
     downvotes: 2,
     noOfAnswers: 3,
     questionTitle: "What is a function?",
     questionBody: "It meant to be",
     questionTags: ["java",'php','c++','mongodb'],
     userPosted: "Mukul",
     userId: 1,
     askedOn: "jan 1",
     answer: [{
       answerBody: 'Answer',
       userAnswered: 'kumar',
       answerOn: "jan 2",
       userId: 2,
     }]
    },
    {
     id: '3',
     votes: 2,
     upvotes: 3,
     downvotes: 2,
     noOfAnswers: 2,
     questionTitle: "What is a function?",
     questionBody: "It meant to be",
     questionTags: ["java",'python','angularjs','mysql'],
     userPosted: "Mukul",
     userId: 1,
     askedOn: "jan 1",
     answer: [{
       answerBody: 'Answer',
       userAnswered: 'kumar',
       answerOn: "jan 2",
       userId: 2,
     }]
    }]
    

  return (
    <div className='question-details-page'>
       {
        questionList === null?
        <h1>Loading....</h1>
        
        : 
        <>
            {
                questionList.filter(question => question.id === id).map(question => (

                <div key={question.id}>
                {console.log(question)}
                <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                  <div className='question-votes'>
                    <img src={uparrow} alt="upvotes" width='18' className='votes-icon' />
                    <p>{question.upvotes - question.downvotes}</p>
                    <img src={downarrow} alt="" width ='18' className='votes-icon' />
                  </div>
                  <div style={{width : '100%'}}>
                    <p className="question-body">{question.questionBody}</p>
                    <div className="question-details-tags">
                         {
                          question.questionTags.map((tag)=>(
                            <p key = {tag}>{tag}</p>
                          ))
                         }
                    </div>

                    <div className="question-action-user">
                      <div>
                        <button type='button'>Share</button>
                        <button type='button'>Delete</button>
                      </div>
                      <div>
                        <p>asked {question.askedOn}</p>
                        <Link to={`/User/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                         <Avatar backgroundColor= "orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                         <div>
                          {question.userPosted}
                         </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                </section>
                {
                  question.noOfAnswers !==0 && (
                    <section>
                      <h3>{question.noOfAnswers} answers</h3>
                      <DisplayAnswer key={question.id} question={question}/>
                    </section>
                  )
                }
                 <section className='post-ans-container'>
                    <h3>Your Answer</h3>
                    <form>
                      <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                      <input type="Submit" className='post-ans-btn' value='Post Your Answer' />
                    </form>
                   <p>
                    Browse other Question tagged   

                    {
                      question.questionTags.map((tag)=>(
                        <Link to ='/Tags' key={tag} className='ans-tags'>  
                          { tag }  </Link>
                      ))
                    } or  

                    <Link to ='?AskQuestion' style={{textDecoration:'none', color:"#009dff"}}> ask your own question</Link>
                   </p>
                 </section>
                </div>
                ))

            }
        </>
       }
    
    </div>
 
  )
}

export default QuestionDetails