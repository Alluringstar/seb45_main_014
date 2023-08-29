import { styled } from 'styled-components';
import menuimg from '../../assets/images/menu_img1.png';
const Menu = () => {
  const menuinventory = 100;
  return (
    <>
      <div className="flex justify-center m-6 border-b">
        <div className="mr-12 pt-8">
          <div className="m-3 text-left">소금빵</div>
          <div className="m-3 text-left">겉바속촉 고소하고 맛있는 소금빵</div>
          <div className="m-3 text-right">2,000 원</div>
        </div>
        <div className="flex flex-col mb-8">
          <MenuImgBox src={menuimg} alt="메뉴 이미지" />
          <div className="text-right">남은 수량 {menuinventory}개</div>
        </div>
      </div>
    </>
  );
};

export default Menu;

const MenuImgBox = styled.img`
  width: 200px;
  height: 150px;
  text-align: right;
`;
