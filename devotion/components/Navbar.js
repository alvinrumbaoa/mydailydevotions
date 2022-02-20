import React from 'react'
import {Image,Text,  Flex, Container, Link, ßText, Heading } from '@chakra-ui/react'
const Navbar = () => {
	return (
		<Flex direction="row" justify="space-between">
			<Link href="/">
				<Text>Logo Sample</Text>
			</Link>
			<Link href="/create">
				<Text>Create Note</Text>
			</Link>
		</Flex>
	)
}

export default Navbar
