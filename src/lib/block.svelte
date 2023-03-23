<script>
	import Nav from './nav.svelte';
	const content = [
		{
			smallHeader: 'Hello there, my name is ...',
			heading: 'Cian Murphy',
			content:
				'I’m a software engineer who enjoys building innovative products that make people’s lives better. Currently building <a href="https://vendee.me" target="_blank" class = "text-blue-400 text-decoration-none">Vendee</a>, a privacy focused email service designed for signing up to sites. Please scroll to find out more about me and my past experience....',
			skills: ['/skills/js.png', '/skills/figma.png', '/skills/python.png']
		},
		{
			smallHeader: 'September 2022',
			heading: 'Websites, Web Apps and Web Summit',
			content: `After finishing university myself and my two co-founders set out on our next challenge, starting a company. <br>
					  We all felt strongly about the idea of empowering everyday consumers in today’s digital world so set about interviewing over 100 consumers on their challenges.<br>

					  Since then I’ve built 3 websites, a web app, and  I am currently building an email client, all in the name of validating value propositions and iterating based on feedback.<br><br>

					  I’ve learned how to use React, Next, Sass, tailwind, AWS Amplify, figma, and more. But most importantly I’ve learned how to listen to people and build things that they find valuable and easy to use.`,
			skills: ['/skills/react.png', '/skills/aws.svg', '/skills/css.png']
		},
		{
			smallHeader: 'August 2022',
			heading: 'Now I am the Master',
			content: `Five years, 8 coding languages, 60 modules, and 3650 cups of coffee later and I did it! I graduated from Trinity College Dublin as a master of Computer Engineering.<br>
			For my thesis I researched Self Sovereign Identity and developed a blockchain based identity system that allowed users to prove certain aspects of their identity by presenting verified signed credentials via USSD. This is a technology similar to SMS meaning that anyone with a basic phone could use the system.<br>
			Other highlights included building a self driving buggy. Staying writing hundreds of lines of assembly code to create simple programs and leading a team to build an Android App to detect bicycle accidents during the height of lockdown. <br>`,
			skills: ['/skills/eth.svg', '/skills/cpp.png', '/skills/nodeJS.png']
		},
		{
			smallHeader: 'September 2020 - 2021',
			heading: 'Dublin to Milan: Milan to St. Gallen',
			content: `Five years, 8 coding languages, 60 modules, and 3650 cups of coffee later and I did it! I graduated from Trinity College Dublin as a master of Computer Engineering.<br>
			For my thesis I researched Self Sovereign Identity and developed a blockchain based identity system that allowed users to prove certain aspects of their identity by presenting verified signed credentials via USSD. This is a technology similar to SMS meaning that anyone with a basic phone could use the system.<br>
			Other highlights included building a self driving buggy. Staying writing hundreds of lines of assembly code to create simple programs and leading a team to build an Android App to detect bicycle accidents during the height of lockdown. <br>`,
			skills: ['/skills/python.png', '/skills/pandas.svg', '/skills/sql.png']
		},
		{
			smallHeader: 'Feburary 2019 - 2022',
			heading: 'Bikes and Bytes',
			content: `I worked as a store assistant at Harry's bike store throughout my time in University to support myself.<br><br>
			During the summer of 2020 when the country was locked down and people becoame bicycle mad I took over additional responsibility as a store manager<br><br>
			In response to the pandemic I also set up the store's e-commerce site to allow us to take online orders and stay competitive.`,
			skills: ['/skills/ecom.png', '/skills/customer.png']
		},
		{
			smallHeader: 'June 2018 - Februrary 2019',
			heading: 'Praising the Sun',
			content: `In the Summer of 2018 I worked on a solar energy project in Malawi with Project Everest Ventures.<br>
			Our aim was to make small scale solar power for lighting and phone charging accessible to low income households who relied on innefficent and unhealthy energy sources<br>
			We quickly realised that people could not afford even basic solar units and that we needed to provide financing options.<br>
			
			I went back in January of 2019 to lead a team. We developed an automated digital repayment system that enabled customers to pay for the solar products in small manageable installments. The digital system we developed improved repayment rates by over 60% compared to previous manual methods`,
			skills: ['/skills/leadership.png', '/skills/checklist.png', '/skills/idea.png']
		}
	];

	export let contentIndex;
	const skills = content[contentIndex].skills;
	//console.log(skills);
</script>

{#if contentIndex == 0}
	<div
		class="wrapper flex w-11/12 m-0 p-0 items-center md:justify-between justify-center flex-wrap-reverse md:gap-4 h-full ml-2 md:ml-0"
	>
		<div class="flex flex-col md:w-7/12 w-11/12 m-0 my-20">
			<h3 class="text-lg text-gray-400 text-left font-medium">
				{content[contentIndex].smallHeader}
			</h3>
			<h1 class="text-3xl text-left text-gray-100 font-semibold">
				{content[contentIndex].heading}
			</h1>
			<p class="text-left text-gray-400 mt-3">
				{@html content[contentIndex].content}
			</p>
			<h3 class="text-lg text-gray-100 text-left font-medium my-3">Tech that I love to use:</h3>
			<div class="flex mx-auto justify-evenly items-center w-full h-full">
				{#each skills as skill}
					<div
						class="group transition-all w-14 h-14 md:mt-10 md:h-20 md:w-20 self-center flex-col justify-center items-center rounded-lg backdrop-blur border-black bg-gradient-to-tr from-transparent-100 to-transparent-200 hover:from-transparent-300 hover:to-transparent-400"
					>
						<img
							class="text-2xl text-gray-200 p-4 md:grayscale group-hover:filter-none filter-none group-hover:transition h-full my-auto mx-auto"
							src={skill}
							alt="Tech Icon"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div class="md:w-4/12 w-11/12">
			<img
				class="rounded-full border-2 border-gray-400 drop-shadow h-50 md:h-80 md:w-80"
				src={'/me.jpeg'}
				alt="Portrait"
			/>
		</div>
	</div>
{:else}
	<div class="wrapper flex w-11/12 m-0 p-0 justify-start flex-wrap-reverse h-full gap-4 md:pb-8 lg:pb-0 ml-2 md:ml-0">
		<div class="flex flex-col w-10/12">
			<h3 class="text-lg text-gray-400 text-left font-medium">
				{content[contentIndex].smallHeader}
			</h3>
			<h1 class="text-3xl text-left text-gray-100 font-semibold">
				{content[contentIndex].heading}
			</h1>
			<p class="text-left text-gray-400 mt-3">
				{@html content[contentIndex].content}
			</p>
			<h3 class="text-lg text-gray-100 text-left font-medium my-3">Skills that I developed:</h3>
			<div class="flex my-3 mx-auto justify-evenly items-center w-11/12 h-full">
				{#each skills as skill}
					<div
						class="group transition-all w-14 h-14 sm:h-20 sm:w-20 flex-col justify-center items-center rounded-lg backdrop-blur border-black bg-gradient-to-tr from-transparent-100 to-transparent-200 hover:from-transparent-300 hover:to-transparent-400"
					>
						<img
							class="text-2xl text-gray-200 p-4 md:grayscale group-hover:filter-none filter-none group-hover:transition h-full my-auto mx-auto"
							src={skill}
							alt="Tech Icon"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
