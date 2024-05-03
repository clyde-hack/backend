const data = [
	{
		id: 1,
		title: 'QuickSync',
		description: 'Efficient tool for seamless data synchronization across multiple devices.',
		dateCreated: '2023-11-15T08:27:12Z',
		dateModified: '2024-02-28T15:43:09Z'
	},
	{
		id: 2,
		title: 'PixelGuard',
		description: 'Advanced image encryption software ensuring utmost privacy and security.',
		dateCreated: '2024-01-03T17:59:34Z',
		dateModified: '2023-12-19T10:22:56Z'
	},
	{
		id: 3,
		title: 'DataForge',
		description: 'Streamlined data manipulation tool simplifying complex tasks with ease.',
		dateCreated: '2024-02-18T09:48:20Z',
		dateModified: '2023-12-30T21:14:47Z'
	},
	{
		id: 4,
		title: 'CodePulse',
		description: 'Dynamic code analysis tool providing insights for efficient debugging and optimization.',
		dateCreated: '2024-01-27T14:36:55Z',
		dateModified: '2023-12-14T04:58:30Z'
	},
	{
		id: 5,
		title: 'SmartTrack',
		description: 'Intelligent task management application facilitating productivity and organization.',
		dateCreated: '2023-12-05T11:20:03Z',
		dateModified: '2024-01-22T19:37:41Z'
	},
	{
		id: 6,
		title: 'SecureVault',
		description: 'Robust data protection software safeguarding sensitive information from unauthorized access.',
		dateCreated: '2024-01-08T06:55:27Z',
		dateModified: '2023-12-31T23:12:05Z'
	},
	{
		id: 7,
		title: 'MediaFlow',
		description: 'Effortless media management solution for organizing and accessing digital content seamlessly.',
		dateCreated: '2023-12-23T13:42:16Z',
		dateModified: '2024-01-17T08:09:38Z'
	},
	{
		id: 8,
		title: 'CodeNinja',
		description: 'Advanced code editor empowering developers with smart features and customization options.',
		dateCreated: '2024-01-15T20:07:49Z',
		dateModified: '2024-02-03T12:29:25Z'
	},
	{
		id: 9,
		title: 'SyncWave',
		description: 'Synchronize files effortlessly across devices with this intuitive and reliable application.',
		dateCreated: '2023-12-29T18:11:36Z',
		dateModified: '2024-01-11T02:35:04Z'
	},
	{
		id: 10,
		title: 'TaskMaster',
		description: 'Powerful task management tool for organizing projects and enhancing productivity.',
		dateCreated: '2024-01-21T22:34:42Z',
		dateModified: '2023-12-07T15:50:19Z'
	},
	{
		id: 11,
		title: 'PixelForge',
		description: 'Professional image editing software offering a wide range of creative tools and features.',
		dateCreated: '2024-02-12T04:18:55Z',
		dateModified: '2024-01-29T11:44:21Z'
	},
	{
		id: 12,
		title: 'DataGuardian',
		description: 'Comprehensive data protection suite ensuring confidentiality and integrity.',
		dateCreated: '2023-12-16T08:50:29Z',
		dateModified: '2024-01-01T16:07:03Z'
	},
	{
		id: 13,
		title: 'InnoSync',
		description: 'Innovative synchronization tool enabling seamless data transfer across platforms.',
		dateCreated: '2024-01-30T15:25:14Z',
		dateModified: '2023-12-24T03:48:48Z'
	},
	{
		id: 14,
		title: 'CodeSprint',
		description: 'Speed up development cycles with this agile code generation tool.',
		dateCreated: '2023-12-08T11:58:03Z',
		dateModified: '2024-01-15T21:14:37Z'
	},
	{
		id: 15,
		title: 'SwiftSync',
		description: 'Fast and efficient file synchronization software for seamless data management.',
		dateCreated: '2024-02-05T19:33:47Z',
		dateModified: '2023-12-20T12:56:13Z'
	},
	{
		id: 16,
		title: 'SafeVault',
		description: 'Securely store and manage sensitive data with this robust encryption tool.',
		dateCreated: '2023-12-18T17:07:22Z',
		dateModified: '2024-01-04T06:29:56Z'
	},
	{
		id: 17,
		title: 'DataPulse',
		description: 'Monitor and analyze data streams in real-time with this powerful software.',
		dateCreated: '2024-01-12T21:52:09Z',
		dateModified: '2023-12-25T14:14:35Z'
	},
	{
		id: 18,
		title: 'TaskForge',
		description: 'Forge ahead with your tasks using this intuitive and versatile task management tool.',
		dateCreated: '2024-02-02T06:19:34Z',
		dateModified: '2024-01-19T19:42:02Z'
	},
	{
		id: 19,
		title: 'PixelSync',
		description: 'Sync your pixel-perfect designs effortlessly with this powerful synchronization tool.',
		dateCreated: '2023-12-26T09:44:57Z',
		dateModified: '2024-01-09T02:07:25Z'
	},
	{
		id: 20,
		title: 'CodeCraft',
		description: 'Craft elegant and efficient code with this versatile and intuitive development tool.',
		dateCreated: '2024-01-18T14:38:41Z',
		dateModified: '2023-12-03T07:55:17Z'
	},
	{
		id: 21,
		title: 'MediaSync',
		description: 'Synchronize your media files seamlessly across devices for easy access.',
		dateCreated: '2023-12-31T05:32:28Z',
		dateModified: '2024-01-14T16:49:01Z'
	},
	{
		id: 22,
		title: 'InnoGuard',
		description: 'Guard your data with innovation and reliability using this comprehensive protection suite.',
		dateCreated: '2024-01-25T10:16:35Z',
		dateModified: '2023-12-10T03:39:09Z'
	},
	{
		id: 23,
		title: 'PixelCraft',
		description: 'Craft pixel-perfect designs with precision and ease using this powerful software.',
		dateCreated: '2024-02-09T16:04:02Z',
		dateModified: '2023-12-27T23:21:28Z'
	},
	{
		id: 24,
		title: 'DataForge Pro',
		description: 'Take your data manipulation to the next level with this professional-grade tool.',
		dateCreated: '2024-01-02T22:29:16Z',
		dateModified: '2024-02-15T11:51:52Z'
	},
	{
		id: 25,
		title: 'CodeSync',
		description: 'Synchronize your code effortlessly across multiple platforms for seamless collaboration.',
		dateCreated: '2024-02-15T07:12:39Z',
		dateModified: '2023-12-28T18:35:04Z'
	},
	{
		id: 26,
		title: 'TaskSync',
		description: 'Sync your tasks across devices for efficient task management on the go.',
		dateCreated: '2023-12-28T12:05:44Z',
		dateModified: '2024-01-11T23:28:21Z'
	},
	{
		id: 27,
		title: 'MediaGuard',
		description: 'Guard your media files against unauthorized access and data breaches.',
		dateCreated: '2024-02-11T03:59:18Z',
		dateModified: '2024-01-28T14:21:43Z'
	},
	{
		id: 28,
		title: 'DataSense',
		description: 'Gain insights and make informed decisions with real-time data analysis.',
		dateCreated: '2023-12-22T18:57:02Z',
		dateModified: '2024-01-05T08:19:37Z'
	},
	{
		id: 29,
		title: 'PixelSense',
		description: 'Enhance your pixel-perfect designs with intuitive tools and features.',
		dateCreated: '2024-01-05T14:44:29Z',
		dateModified: '2023-12-20T21:07:54Z'
	},
	{
		id: 30,
		title: 'SyncCraft',
		description: 'Craft seamless synchronization solutions for your data management needs.',
		dateCreated: '2024-01-31T09:23:08Z',
		dateModified: '2023-12-16T01:45:32Z'
	},
	{
		id: 31,
		title: 'TaskPulse',
		description: 'Stay on top of your tasks with real-time updates and notifications.',
		dateCreated: '2024-02-16T13:38:55Z',
		dateModified: '2024-01-02T04:59:21Z'
	},
	{
		id: 32,
		title: 'CodeFlow',
		description: 'Flow seamlessly through your code with this powerful and intuitive IDE.',
		dateCreated: '2024-01-10T20:51:34Z',
		dateModified: '2023-12-25T12:14:59Z'
	},
	{
		id: 33,
		title: 'DataNinja',
		description: 'Unleash your data prowess with this agile and versatile data management tool.',
		dateCreated: '2023-12-25T15:34:21Z',
		dateModified: '2024-01-08T23:57:47Z'
	},
	{
		id: 34,
		title: 'PixelPulse',
		description: 'Pulse through pixel-perfect designs with this dynamic and versatile software.',
		dateCreated: '2024-02-08T09:47:12Z',
		dateModified: '2023-12-22T18:09:38Z'
	},
	{
		id: 35,
		title: 'SecureSync',
		description: 'Securely synchronize your data across devices with this robust encryption tool.',
		dateCreated: '2024-01-01T05:16:37Z',
		dateModified: '2023-12-14T09:39:03Z'
	},
	{
		id: 36,
		title: 'CodeGuard',
		description: 'Guard your code against vulnerabilities and security threats with this comprehensive tool.',
		dateCreated: '2023-12-14T21:33:59Z',
		dateModified: '2024-01-27T13:55:24Z'
	},
	{
		id: 37,
		title: 'TaskGuardian',
		description: 'Guard your tasks against inefficiency and oversight with this powerful task management tool.',
		dateCreated: '2024-02-03T03:29:44Z',
		dateModified: '2023-12-19T16:52:09Z'
	},
	{
		id: 38,
		title: 'MediaMaster',
		description: 'Master your media library with this comprehensive media management solution.',
		dateCreated: '2023-12-19T10:22:56Z',
		dateModified: '2024-01-05T03:45:30Z'
	},
	{
		id: 39,
		title: 'DataCraft',
		description: 'Craft data solutions with precision and efficiency using this versatile software.',
		dateCreated: '2024-01-14T16:07:03Z',
		dateModified: '2023-12-31T09:18:27Z'
	},
	{
		id: 40,
		title: 'PixelGuardian',
		description: 'Guard your pixels against distortion and imperfection with this powerful software.',
		dateCreated: '2023-12-31T23:12:05Z',
		dateModified: '2024-01-17T14:33:51Z'
	},
	{
		id: 41,
		title: 'SyncCraft Pro',
		description: 'Craft professional-grade synchronization solutions for your data management needs.',
		dateCreated: '2024-01-24T04:38:20Z',
		dateModified: '2023-12-07T21:59:45Z'
	},
	{
		id: 42,
		title: 'CodeWave',
		description: 'Ride the wave of code efficiency with this dynamic and versatile code editor.',
		dateCreated: '2023-12-17T13:56:28Z',
		dateModified: '2024-01-01T23:22:04Z'
	},
	{
		id: 43,
		title: 'DataNest',
		description: 'Nest your data securely and efficiently with this powerful data management tool.',
		dateCreated: '2024-01-11T18:09:38Z',
		dateModified: '2023-12-26T07:32:12Z'
	},
	{
		id: 44,
		title: 'MediaSync Pro',
		description: 'Sync your media files seamlessly across devices with this professional-grade tool.',
		dateCreated: '2024-02-04T08:33:59Z',
		dateModified: '2023-12-18T16:56:23Z'
	},
	{
		id: 45,
		title: 'PixelCraft Pro',
		description: 'Craft professional-grade pixel-perfect designs with this powerful software.',
		dateCreated: '2023-12-18T23:21:28Z',
		dateModified: '2024-01-02T21:44:04Z'
	},
	{
		id: 46,
		title: 'CodeForge',
		description: 'Forge ahead with your code projects using this powerful and versatile IDE.',
		dateCreated: '2024-01-09T02:07:25Z',
		dateModified: '2023-12-23T19:07:49Z'
	},
	{
		id: 47,
		title: 'TaskForge Pro',
		description: 'Forge ahead with your tasks using this professional-grade task management tool.',
		dateCreated: '2023-12-30T01:45:32Z',
		dateModified: '2024-01-14T03:09:08Z'
	},
	{
		id: 48,
		title: 'MediaPulse',
		description: 'Pulse through your media library with this dynamic and versatile media management solution.',
		dateCreated: '2024-01-13T16:49:01Z',
		dateModified: '2023-12-28T08:21:35Z'
	},
	{
		id: 49,
		title: 'SecureGuard',
		description: 'Guard your data with utmost security and reliability using this powerful encryption tool.',
		dateCreated: '2023-12-27T14:21:43Z',
		dateModified: '2024-01-10T09:44:17Z'
	},
	{
		id: 50,
		title: 'DataForge Express',
		description: 'Simplify your data manipulation tasks with this express and efficient tool.',
		dateCreated: '2024-01-03T07:55:17Z',
		dateModified: '2023-12-18T14:38:41Z'
	}
];

export default data;
