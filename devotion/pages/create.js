import React,{useState, useEffect} from 'react'
import {Flex, Heading, Input, FormControl, Textarea, Button} from '@chakra-ui/react'
import {useRouter} from 'next/router'
const create = () => {
	const [verse, setVerse] = useState("");
	const [message, setMessage] = useState("");
	const [application, setApplication] = useState("");
	const [errors, setErrors] = useState({})
	const router = useRouter();



	const handleSubmission = async () => {
		const info = {
		  verse: "Kieran",
		  message: "message",
		  application: "application is the best"
		}
	
		const res = await fetch("/api/notes", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json"
		  },
		  body: JSON.stringify(info)
		});
	
		const data = await res.json();
		console.log(data) // { message: "success" }
	  }
	
	  return (
		<div>
		  <button onClick={handleSubmission}>
			Submit
		  </button>
		</div>
	  )
}

export default create
