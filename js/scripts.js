$(document).ready(function() {

	$(".title .image-cell").css({
			'background-image': 'url(' + slideshow[Math.floor(Math.random() * slideshow.length)] + ')'
		});
		$(".imageR .image-cell").css({
			'background-image': 'url(' + fullres[Math.floor(Math.random() * fullres.length)] + ')',
			'background-position': Math.floor(Math.random() * 100) / 2 + 30 + "% " + Math.floor(Math.random() * 100) + "%",
			'background-size': "300%",
		})


	function slides() {
		$(".title .image-cell").css({
			'background-image': 'url(' + slideshow[Math.floor(Math.random() * slideshow.length)] + ')'
		});
		$(".imageR .image-cell").css({
			'background-image': 'url(' + fullres[Math.floor(Math.random() * fullres.length)] + ')',
			'background-position': Math.floor(Math.random() * 100) / 2 + 30 + "% " + Math.floor(Math.random() * 100) + "%",
			'background-size': "300%",
		})
	}
	var runslides = setInterval(slides, 2000)
	$(".intro .text").html(texts['intro'].text); // about text is open initially.
	$(".interactive").click(function() {
		var content = $(this).attr('data')
		var interval = $(this).attr('data-type')
		$(".intro .text").hide().delay(200).fadeIn(50).html(texts[content].text);
		$(".interactive[data='" + content + "']").css({
			"border-top": "2px solid grey",
			"border-left": "2px solid grey",
			"border-right": "2px solid white",
			"border-bottom": "2px solid white",
		})
		$(".interactive[data!='" + content + "']").css({
			"border-top": "2px solid white",
			"border-left": "2px solid white",
			"border-right": "2px solid grey",
			"border-bottom": "2px solid grey",
		})
		if (interval !== "slide") { // check if slideshow should be running
			clearInterval(runslides)
			$(".image-cell").css('background-image', 'url(' + texts[content].image + ')');
			$(".imageR .image-cell").css({
				'background-position': Math.floor(Math.random() * 100) / 2 + 30 + "% " + Math.floor(Math.random() * 100) + "%",
			})
		} else {
			clearInterval(runslides)
			$(".image-cell").css('background-image', 'url(' + slideshow[Math.floor(Math.random() * slideshow.length)] + ')');
			$(".imageR .image-cell").css({
				'background-image': 'url(' + fullres[Math.floor(Math.random() * fullres.length)] + ')',
				'background-position': Math.floor(Math.random() * 100) / 2 + 30 + "% " + Math.floor(Math.random() * 100) + "%",
				'background-size': "300%",
			})
		}
	});
});
var slideshow = ["assets/img/work-pics/drone_megaphone_sq.jpg", "assets/img/work-pics/foreign_sq.jpg", "assets/img/work-pics/kinlaw_sq.jpg", "assets/img/work-pics/fei_passing_sq.jpg", "assets/img/work-pics/sarah_sq.jpg", "assets/img/work-pics/ramos_wu_sq.jpg"]
var fullres = ["assets/img/work-pics/drone_megaphone.jpg", "assets/img/work-pics/foreign.jpg", "assets/img/work-pics/kinlaw.jpg", "assets/img/work-pics/fei_passing_sq.jpg", "assets/img/work-pics/sarah.jpg", "assets/img/work-pics/ramos_wu.jpg"]
var texts = {
	'andrew': {
		"text": "<p><strong>Recalibrating (2021)</strong><br><em>Digital video with sound. 11 Minutes.</em><br><br><a href='https://player.vimeo.com/video/524526163' target='_blank'>View this work</a></p><p>From the artist</p><p>An emergency response drone scours the landscape looking for human life in a world where people are mysteriously absent. Announcements from the drone’s megaphone echo across the terrain as its onboard artificial intelligence system grapples with a world that was unimagined by its programmers. Unable to accomplish its encoded objective, the drone attempts alternative methods for achieving its goal. Extrapolating new research in Machine Learning, this work of speculative fiction explores notions of artificial curiosity and machine self-actualization through the lens of non-human consciousness, languages of communication and the poetry of interfaces.</p><p>From Nokia Bell Labs</p><p>At Bell Labs, we are interested in exploring the intersection of humans and machines. Instead of focusing on and amplifying the struggle between these two seemingly different parties, our research focuses on topics that show how humans and machines will come together to better the world. Our focus is not on how we can create machines that mimic our way of experiencing the world, but rather to see how our intelligence, capabilities and humanity can be augmented by these machines. We look to many areas including machine curiosity, machine learning, and machine intelligence to determine how we can best collaborate with machines to build a better world.</p>",
		"image": "assets/img/work-pics/drone_megaphone_sq.jpg",
		"imageFull": "assets/img/work-pics/drone_megaphone.jpg",
	},
	'foreignobjects': {
		"text": "<p><strong>Foreign Objects X Eliza Collin X Genie Kausto</strong><br><strong>An Introduction to the Bell System (2021)</strong><br><em>Embroidered workwear, digital video, photographs.</em><br><br><a href='http://1127.foreignobjects.net' target='_blank'>View this work</a></p><p>From the artists</p><p>In <i>An Introduction to the Bell System</i>, we have made 5 embroidered jumpsuits exploring the history and working culture of the Computing Sciences Research Center at Bell Labs, between 1970-90. Though famous for the success of the Unix operating system and surrounding tools, the group's cult status online is buoyed by a much wider array of playful, experimental and sometimes anarchic work, in an era where the identity of “tech worker” was yet to be defined. This project is a form of fan art: each suit considers a strand of research from this era at Bell through the projects, in-jokes and ephemera.</p><p>From Nokia Bell Labs</p><p>Our collaboration with Foreign Objects uncovered a wealth of knowledge about the hidden histories in Bell Labs. Through these histories, we learned how past researchers were idiosyncratic and open-minded, allowing them to work and collaborate across many disciplines, driven by pure passion, healthy optimism, and devoted research, rather than by the desire to chase the next big product. Discovering these histories reminded us of the power of our art and tech program, and how new ideas can emerge from the purposeful collision of many different skills and perspectives.</p>",
		"image": "assets/img/work-pics/foreign_sq.jpg",
		"image": "assets/img/work-pics/foreign.jpg",
	},
	'kinlaw': {
		"text": "<p><strong>The Sigh of My Hand (2021)</strong><br><em>Performance, movement, audio, and psychological play</em><br><br><a href='' target='_blank'>View this work</a></p><p>From the artist</p><p>This work-in-progress shows the intricate ways sound affects dance. How movement changes acoustics. I build installations to play with these crossovers, accentuating the collapse of a singular sense. I am continually working to articulate how human relationships are not always one-to-one, and so, this process will reflect the flexibility of human impulse. By adding discreet sensors on the performer’s body, The Sigh of My Hand will use technology to blend further the connection between the movement and the story behind the sound.</p><p>From Nokia Bell Labs</p><p>At Bell Labs we have always sought out better ways for humans to communicate. Our communication experiments often take form through 0s and 1s, and are presented through words spoken through a digital representation of our faces. However, we know that 70% of emotional human communication is non-verbal, and the subtle and subconscious language of our bodies, beyond just facial expressions, plays a critical role in how we come to understand each other. Kinlaw’s practice focuses on empathic potential and agency developed by bodily movement and performance. It is exactly this broader lens on human communication and connection that we have been exploring in this collaboration.</p>",
		"image": "assets/img/work-pics/kinlaw_sq.jpg",
		"imageFull": "assets/img/work-pics/kinlaw.jpg",
	},
	'intro': {
		"text": "<p><strong>About</strong></p><p>This exhibition showcases new works created by artists Andrew Demirjian, Foreign Objects, Kinlaw, Fei Liu, Mark Ramos & Ziyang Wu, and Sarah Rothberg as part of a unique collaboration between NEW INC, Rhizome, and the Experiments in Art & Technology program at Nokia Bell Labs. </p><p>Last year, Rhizome and NEW INC welcomed a cohort of artists and designers to the cultural incubator for a special year-long opportunity to pursue interdisciplinary practices in conversation and, ultimately, collaboration with the research community at Nokia Bell Labs. Artists were selected for their innovative use of digital tools and practices through a variety of forms including movement and performance, creative coding and design, and their alignment with the research subjects at Bell Labs: the futures of communication, networks, robotics, and more. </p><p>This cohort’s work followed previous collaborations between NEW INC members and Bell Labs researchers from 2016-2019 and, of course, the legendary Experiments in Art & Technology program of many decades. This exhibition presents just one dynamic view into a rich and robust multi-year partnership between the New Museum and Nokia Bell Labs, and into the history of Experiments in Art & Technology.</p><p>This exhibition website was designed by Foreign Objects using Go font. </p><p>The Experiments in Art & Technology program at Nokia Bell Labs is directed by Domhnaill Hernon, with production overseen by Ethan Edwards and Danielle McPhatter. </p>",
		"image": "",
		"imageFull": "",
	},
	'about': {
		"text": "<p><strong>New Museum</strong></p><p>The New Museum is the only museum in New York City exclusively devoted to contemporary art. Founded in 1977, the New Museum is a center for exhibitions, information, and documentation about living artists from around the world. From its beginnings as a one-room office on Hudson Street to the inauguration of its first freestanding building on the Bowery designed by SANAA in 2007, the New Museum continues to be a place of experimentation and a hub of new art and new ideas.</p><p><strong>NEW INC</strong></p><p>NEW INC was cofounded by Lisa Phillips and Karen Wong in 2013 and is the first museum-led cultural incubator dedicated to supporting innovation, collaboration, and entrepreneurship across art, design, and technology. NEW INC’s Director is Stephanie Pereira. For more information, visit newinc.org.</p><p><strong>Rhizome</strong></p><p>Rhizome champions born-digital art and culture through artist-centered programs that commission, present, and preserve art made with and through digital networks and tools. Online since 1996, the organization is an affiliate of the iconic New Museum in New York City. For more information, visit rhizome.org.</p><p><strong>Nokia Bell Labs</strong></p><p>Nokia Bell Labs, Nokia’s research and innovation arm, creates the disruptive technologies that are shaping the way the world communicates and connects. With expertise in analytics, cloud, fixed, optics, and wireless, and by collaborating openly with the global innovation community, Nokia Bell Labs is seeking the technology solutions that will transform the connected world, enhancing the speed, capacity, efficiency, and reliability of data, as well as the increasing automation and digitization of our lives and entire industries. For ninety years, scientific breakthroughs at Nokia Bell Labs have fundamentally transformed the ICT industry and won eight Nobel Prizes.</p>",
		"image": "",
		"imageFull": "",
	},
	'fei': {
		"text": "<p><strong>Fei Liu</strong><br><strong>PASSING (2021)</strong><br><em>Performance and video</em><br><br><a href='https://vimeo.com/524553966' target='_blank'>View this work</a></p><p>From the artist</p><p>In PASSING, a pair of engineers discover the surprising use of a factory robot that's been repurposed for the home, and contend with the friction between desiring technology to convince—even to pass or surpass—us of its humanity, and proving to ourselves and others that it cannot.</p><p>From Nokia Bell Labs</p>As technologists and engineers, we are very excited about all the ways robots can improve our efficiency or perform new tasks, but sometimes we miss that the most important thing a robot can do is interact with a human. We have been working with Fei on this project for a couple of years, investigating what it means to “raise empathic robots,” in Fei’s words This gives a sense of Fei’s interests and her sensibilities towards the interaction between humans and machines, and it's this sort of thinking that is helping Bell Labs direct its own ideas on better Robot Human Interaction. </p>",
		"image": "assets/img/work-pics/fei_passing_sq.jpg",
		"imageFull": "assets/img/work-pics/fei_passing.jpg",
	},
	'sarah': {
		"text": "<p><strong>Sarah Rothberg</strong><br><strong></strong><br><em>BEING IN REAL-TIME (or: SEEING LIKE A MACHINE / A MACHINE SEEING LIKE ME)</em><br><br><a href='https://vimeo.com/524396754/3057e52ec6'>View this work</a></p><p>From the artist</p><p>BEING IN REAL-TIME (or: SEEING LIKE A MACHINE / A MACHINE SEEING LIKE ME) is a work-in-progress by artist Sarah Rothberg and Bell Labs creative technologists Ethan Edwards and Danielle Mcphatter. They are using a prototype device called an eyebud (a wifi-connected wearable camera/headphone/speaker) to act as a prosthetic memory: anchoring data (speech-to-text) to objects that are able to be 'recognized' by the eyebud via a machine learning model modified with a small set of data. Both the training data and speech-to-text are generated spontaneously in real-time. The first planned use of this pipeline is a durational performance and resulting interactive experience: Rothberg wears the eyebud first to train the model to 'see.' After the model has been trained, when the eyebud recognizes a significant object, Rothberg is prompted to speak. The next time Rothberg wears the eyebud, when that object is recognized, the last text is read out, and Rothberg adds to it. At the end of the performance, anyone can wear the eyebud and hear the text played back when the eyebud 'sees' the objects.</p><p>From Nokia Bell Labs</p>As smart, wearable devices become more ubiquitous, we are entering a new era of interaction with the world around us. Within the next decade or so, we may witness the end of the smartphone era as wearable devices become the new norm. As technology develops in this space, these devices will become more embodied and provide augmented capabilities. Working with Sarah and this new wearable device has been eye opening: artists can take a device seemingly built for a very specific industrial purpose and reimagine its potential in a  human-centric way. It is with these kinds of collaborations that we are able to see how to better create technology that improves the human condition.</p>",
		"image": "assets/img/work-pics/sarah_sq.jpg",
		"imageFull": "assets/img/work-pics/sarah.jpg",
	},
	'markandziyang': {
		"text": "<p><strong>Mark Ramos and Ziyang Wu</strong><br><strong>Networked Ecosystem (2021)</strong><br><em>Live simulation online environment</em><br><br><a href='' target='_blank'>View this work</a></p><p>From the artist</p><p>Networked Ecosystem is a live-simulation environment that presents an ecosystem built of a variety of digital  senses. Commissioned by NEW INC, Rhizome and Nokia Bell Labs, Networked Ecosystem takes machine vision and sensing data collected by Bell Lab’s experimental robots and sensors and repurposes it to drive a 3D environmental simulation.</p><p>In Networked Ecosystem, natural phenomena have been replaced by digital and artificial systems as forces that drive development: Electricity/battery = sustenance, WIFI signals = nutrition, Lidar data = fire/heat. Data organisms populate this digital ecosystem as native life forms as bots, AI, and avatars. Visitors to this networked landscape develop new kinds of digital senses to experience data as environmental changes, and interact with the simulated world and each other in an ever-changing online environment.</p><p>From Nokia Bell Labs</p><p>At Bell Labs, we are developing solutions that create smart enterprises. One of the most interesting areas of research is how to represent a complex ecosystem of multi-modal data to a user in a way that empowers them with understanding so they can easily take action. Data visualization often relies on static 2D bar charts and pie graphs to represent dynamic environments—methods that are not at all innate to the way that we, as humans, experience the world around us. We are happy to present Networked Ecosystems, a 3D world developed by Mark and Ziyang that lives, grows, and changes with the data—enabling new modes of more human-centric exploration.</p>",
		"image": "assets/img/work-pics/ramos_wu_sq.jpg",
		"imageFull": "assets/img/work-pics/ramos_wu.jpg",
	}
}
