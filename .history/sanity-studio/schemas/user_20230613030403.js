export default {
  title: 'User',
  name: 'user', //model name
  type: 'document',
  fields: [
    {
      title: 'Username', //title is name to see at studio ui
      name: 'username', // name is database key for accessing
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array', //다른 타입에 대한 배열을 가질 수 있음
      of: [
        // 어떤 타입을 가질것인지 명시
        {
          type: 'reference',
          to: [{type: 'user'}], // 어떤 스키마를 참조할 것인지 명시
        },
      ],
      validation: (Rule) => Rule.unique(), // 유니크한 값들만 있어야함 중복 허용x
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array', //다른 타입에 대한 배열을 가질 수 있음
      of: [
        // 어떤 타입을 가질것인지 명시
        {
          type: 'reference',
          to: [{type: 'user'}], // 어떤 스키마를 참조할 것인지 명시
        },
      ],
      validation: (Rule) => Rule.unique(), // 유니크한 값들만 있어야함 중복 허용x
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        // 어떤 타입을 가질것인지 명시
        {
          type: 'reference',
          to: [{type: 'post'}], // 어떤 스키마를 참조할 것인지 명시
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
