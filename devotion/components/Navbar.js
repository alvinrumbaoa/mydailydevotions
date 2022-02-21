import React from 'react'
import {Image,Text, Button, Flex, Container, Link, ßText, Heading } from '@chakra-ui/react'
const Navbar = () => {
	return (
		<Flex p={5} direction="row" align="center" justify="space-between" background="teal.500">
			<Link href="/">
				<Heading size="lg" color="teal.900" textShadow="1px 1px 2px white">Word Treasures</Heading>
			</Link>
			<Link href="/create">
				<Button size="lg" color="teal.800">Create Note</Button>
			</Link>
		</Flex>
	)
}

export default Navbar
