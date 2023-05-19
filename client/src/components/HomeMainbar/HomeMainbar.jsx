import React from 'react'
import './HomeMainbar.css'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()


  var questionList = [{
    id: 1,
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
 id: 1,
 votes: 1,
 upvotes: 3,
 downvotes: 2,
 noOfAnswers: 2,
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
 id: 1,
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


 const checkAuth = () =>{
  if(user === null){
    alert("Login or Signup to ask a question")
    navigate('./Auth')
  }
  else{
    navigate('./Askquestion')
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
         <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
      {
        questionList === null ?
         <h1>Loading...</h1>:
         <>
           <p>{questionList.length} questions</p>
          
              <QuestionList questionList={questionList}/>
         
         </>

      }
      </div>
        
    </div>
  )
}

export default HomeMainbar