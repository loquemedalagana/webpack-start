import { PostItem, ImageItem, VideoItem } from '../types/item';
import { v4 as uuidv4 } from 'uuid';

export const samplePostList: Array<PostItem | VideoItem | ImageItem> = [
  {
    type: "post",
    id: uuidv4(),
    title: '첫번째 노트 제목',
    description: '격하게 아무것도 하기싫다ㅠㅠ',
  },
  {
    type: "video",
    id: "wtTvZH3Q7js",
    url: 'https://youtu.be/wtTvZH3Q7js',
    title: '[[전인혁BAND]김종서- ‘대답 없는 너’ Cover by 전인혁BAND',
    description:
      '고화질 , 이어폰으로 감상 부탁드립니다.\n\n안녕하세요. 이번엔 연주한 곡은 \n김종서 선배님의 명곡 ‘대답 없는 너’를 연주해봤습니다. \n환절기에 감기 조심하고요, 즐겁게 감상해주세요.^^\n\n',
  },
  {
    type: "image",
    id: uuidv4(),
    url: 'https://yt3.ggpht.com/ytc/AAUvwniV3e0j1NQbR2l1RW5C01DNjglP_gjnHuPz8JHM=s800-c-k-c0x00ffffff-no-rj',
    title: 'Jeon Inhyuk Band',
    description: 'Jeon Inhyuk band official image',
  },
  {
    type: "video",
    id: "AMM9gikcGdY",
    url: 'https://www.youtube.com/embed/AMM9gikcGdY',
    title: '[전인혁band] 야다 전인혁의 다시부르기 - 변진섭 ‘너에게로 또 다시’',
    description: '안녕하세요. 이번엔 연주한 곡은 \n변진섭 선배님의 명곡 ‘너에게로 또 다시’를 연주해봤습니다.',
  },
  {
    type: "post",
    id: uuidv4(),
    title: '두 번째 노트 제목',
    description: '아오 심심해ㅠ 진짜 먹고 살기 힘들다 돈도 없고ㅠㅠ 밥이나먹자',
  },
  {
    type: "video",
    id: "TRZl3cVTwAY",
    url: 'https://www.youtube.com/watch?v=TRZl3cVTwAY',
    title: '[전인혁BAND]신성우- ‘서 시’ Cover by 전인혁BAND',
    description:
      '고화질 , 이어폰으로 감상 부탁드립니다.\n\n안녕하세요. \n이번엔 저희가 연주한 곡은 \n신성우 선배님의 명곡 ‘서시’ 입니다.\n명절 잘 보내시고요, 즐겁게 감상해주세요~\n새해 복 많이 받으세요.^^\n\n',
  },
];
