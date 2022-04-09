import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
  padding: 15px 40px;
`;

export const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ImageConent = styled.div`
  padding: 10px;

  div {
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 272px;
`;

export const TitleContent = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 24px;
    height: 24px;
    margin-top: -2px;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  margin-left: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: { marked: boolean }) =>
    props.marked ? "#ffd700" : "#00000"};
`;
