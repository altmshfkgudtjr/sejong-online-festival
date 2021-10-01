import styled from 'styled-components';
import { palette } from 'lib/styles';

const Comments = () => {
  const comments = [
    {
      user_id: '16011040',
      text: '화이팅 IML!',
      date: '2021.09.21',
    },
    {
      user_id: '16011040',
      text: '화이팅 IML! 우승가자!',
      date: '2021.09.21',
    },
    {
      user_id: '16011040',
      text: '응애 대상줘',
      date: '2021.09.21',
    },
    {
      user_id: '16011075',
      text: '화이팅 IML!',
      date: '2021.09.21',
    },
  ];

  return (
    <Layout>
      <InputLayout>
        <Input placeholder="응원하기 메세지를 남겨주세요" />
        <Icon src="/images/ionic-ios-send.png" />
      </InputLayout>
      {comments.map((comment, index) => (
        <CommentLayout key={index}>
          <UserId>{comment.user_id}</UserId>
          <Comment>{comment.text}</Comment>
          <Date>{comment.date}</Date>
        </CommentLayout>
      ))}
    </Layout>
  );
};

const Layout = styled.section`
  position: relative;
  margin: 80px 0 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputLayout = styled.div`
  position: relative;
  padding-left: 16px;
  margin-bottom: 6px;
  width: 536px;
  height: 51px;
  background: ${palette.background.bg2};
  border-radius: 8px;
`;

const Input = styled.input`
  width: 90%;
  height: 51px;
  display: flex;
  align-items: center;
  color: ${palette.white};
  opacity: 0.6;
  background: none;
  outline: none;
  border: none;

  &::placeholder {
    color: ${palette.font.secondary};
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 13.5px;
  right: 16px;
`;

const CommentLayout = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  width: 536px;
`;

const UserId = styled.span`
  background: ${palette.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  position: absolute;
  top: -18px;
  left: 4px;
`;

const Comment = styled.div`
  width: fit-content;
  padding: 0 16px;
  background: ${palette.font.secondary};
  color: ${palette.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
`;

const Date = styled.span`
  color: ${palette.white};
  opacity: 0.6;
  margin-left: 12px;
  font-size: 12px;
  line-height: 24px;
`;

export default Comments;
