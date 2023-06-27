export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'comments.0.comment', // comments 키의 0번째 인덱스 comment
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo', // media키를 이용해 이미지도 보여줌
    },
    prepare(selection) {
      //데이터를 가공할 수 있음 함수 제공 select에서 선택함 값들이 객체형태의 인자로 들어옴
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName}(${authorUsername})`,
        media,
      }
    },
  },
}
