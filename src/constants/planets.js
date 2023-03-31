import { v4 } from 'uuid';

export const PLANETS_MENU = [
	{
		id: v4(),
		name: 'mercury',
		color: '#DEF4FC',
		route: '/mercury'
	},
	{
		id: v4(),
		name: 'venus',
		color: '#F7CC7F',
		route: '/venus'
	},
	{
		id: v4(),
		name: 'earth',
		color: '#545BFE',
		route: '/earth'
	},
	{
		id: v4(),
		name: 'mars',
		color: '#FF6A45',
		route: '/mars'
	},
	{
		id: v4(),
		name: 'jupiter',
		color: '#ECAD7A',
		route: '/jupiter'
	},
	{
		id: v4(),
		name: 'saturn',
		color: '#FCCB6B',
		route: '/saturn'
	},
	{
		id: v4(),
		name: 'uranus',
		color: '#65F0D5',
		route: '/uranus'
	},
	{
		id: v4(),
		name: 'neptune',
		color: '#497EFA',
		route: '/neptune'
	},
];



const MERCURY_INFO = {
	size: '6.9375rem',
	image: '/images/planet-mercury.svg',
	title: 'mercury',
	text: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
	source: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '58.6 days',
			id: v4()
		},
		{
			property: 'revolution',
			value: '87.97 days',
			id: v4()
		},
		{
			property: 'radius',
			value: '2,439.7 km',
			id: v4()
		},
		{
			property: 'average',
			value: '430°c',
			id: v4()
		}
	]

}
const VENUS_INFO = {
	size: '9.625rem',
	image: '/images/planet-venus.svg',
	title: 'venus',
	text: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
	source: 'https://es.wikipedia.org/wiki/Venus_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '243 days',
			id: v4()
		},
		{
			property: 'revolution',
			value: '224.7 days',
			id: v4()
		},
		{
			property: 'radius',
			value: '6,051.8 km',
			id: v4()
		},
		{
			property: 'average',
			value: '471°c',
			id: v4()
		}
	]
}
const EARTH_INFO = {
	size: '10.8125rem',
	image: '/images/planet-earth.svg',
	title: 'earth',
	text: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
	source: 'https://es.wikipedia.org/wiki/Tierra',
	list: [
		{
			property: 'rotation',
			value: '0.99 days',
			id: v4()
		},
		{
			property: 'revolution',
			value: '365.26 days',
			id: v4()
		},
		{
			property: 'radius',
			value: '6,371 KM',
			id: v4()
		},
		{
			property: 'average',
			value: '16°c',
			id: v4()
		}
	]
}
const MARS_INFO = {
	size: '8.0625rem',
	image: '/images/planet-mars.svg',
	title: 'mars',
	text: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
	source: 'https://es.wikipedia.org/wiki/Marte_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '1.88 years',
			id: v4()
		},
		{
			property: 'revolution',
			value: '365.26 days',
			id: v4()
		},
		{
			property: 'radius',
			value: '3,389.5 km',
			id: v4()
		},
		{
			property: 'average',
			value: '−28°c',
			id: v4()
		}
	]
}
const JUPITER_INFO = {
	size: '14rem',
	image: '/images/planet-jupiter.svg',
	title: 'jupiter',
	text: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,
	source: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '9.93 hours',
			id: v4()
		},
		{
			property: 'revolution',
			value: '11.86 years',
			id: v4()
		},
		{
			property: 'radius',
			value: '69,911 km',
			id: v4()
		},
		{
			property: 'average',
			value: '-108°c',
			id: v4()
		}
	]
}
const SATURN_INFO = {
	size: '14rem',
	image: '/images/planet-saturn.svg',
	title: 'saturn',
	text: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`,
	source: 'https://es.wikipedia.org/wiki/Saturno_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '10.8 hours',
			id: v4()
		},
		{
			property: 'revolution',
			value: '29.46 years',
			id: v4()
		},
		{
			property: 'radius',
			value: '58,232 km',
			id: v4()
		},
		{
			property: 'average',
			value: '-138°c',
			id: v4()
		}
	]
}
const URANUS_INFO = {
	size: '11rem',
	image: '/images/planet-uranus.svg',
	title: 'uranus',
	text: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
	source: 'https://es.wikipedia.org/wiki/Urano_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '17.2 hours',
			id: v4()
		},
		{
			property: 'revolution',
			value: '84 years',
			id: v4()
		},
		{
			property: 'radius',
			value: '25,362 km',
			id: v4()
		},
		{
			property: 'average',
			value: '-195°c',
			id: v4()
		}
	]
}
const NEPTUNE_INFO = {
	size: '10.8125rem',
	image: '/images/planet-neptune.svg',
	title: 'neptune',
	text: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
	source: 'https://es.wikipedia.org/wiki/Urano_(planeta)',
	list: [
		{
			property: 'rotation',
			value: '16.08 hours',
			id: v4()
		},
		{
			property: 'revolution',
			value: '164.79 years',
			id: v4()
		},
		{
			property: 'radius',
			value: '24,622 km',
			id: v4()
		},
		{
			property: 'average',
			value: '-201°c',
			id: v4()
		}
	]
}

export const PLANETS_INFO = {
	mercury: MERCURY_INFO,
	venus: VENUS_INFO,
	earth: EARTH_INFO,
	mars: MARS_INFO,
	jupiter: JUPITER_INFO,
	saturn: SATURN_INFO,
	uranus: URANUS_INFO,
	neptune: NEPTUNE_INFO
}
