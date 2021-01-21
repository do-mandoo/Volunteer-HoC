import React from 'react';
import styled from 'styled-components';
import image from '../images/seed.jpg'
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';


const MainbannerBlock = styled.div`
    width:100%;
    height:450px;
    background:url(${image});
    background-size:100%;
    background-position:left center;
    position:relative;
    z-index:1;
    ::after{
      content:'';
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      z-index:10;
      background:rgba(0,0,0,0.2)
    }
    p{
      :nth-child(1){
        position:relative;
        color:#fff;
        width:350px;
        font-size:2rem;
        padding-top:200px;
        padding-bottom:20px;
        z-index:100;
        margin:0 auto;
        text-align:center;
        line-height:45px;
      }
    
      :nth-child(2){
        font-size:1rem;
        position:relative;
        color:#fff;
        z-index:100;
        text-align:center;
      }
    }
    .buttonContainer{
      position:absolute;
      z-index:100;
      bottom:-10px;
      left:50%;
      transform:translateX(-50%);
      box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.08);
    }
    .companyButton{
      color:#fff;
      padding:15px 100px;
      background:#03c75a;
      outline:none;
      border:none;
      border-radius:0;
      background: linear-gradient(170deg, rgb(3, 199, 90), rgb(2, 180, 81));
      font-size:1.1rem;
      position:relative;
      :hover{
        background:#fff;
        color:#03c75a;
      }
    }
    span{
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      height:3px;
      background: linear-gradient(170deg, rgb(3, 199, 90), rgb(2, 180, 81));
    }
    
  `
export default function Mainbanner({AuthState}) {
  return (
      <MainbannerBlock>
          <p>따뜻한 마음으로 함께할 봉사자를 모집합니다</p>
          <p>심봉사는 봉사자와 봉사기관을 연결해주는 플랫폼입니다.</p>
          <div className="buttonContainer">
            {AuthState.login.position === 'company' && <Button className="companyButton" as={Link} to="/write">
            글쓰기<span></span>
              </Button>}
            
            {AuthState.login.position === 'company' && <Button className="companyButton" as={Link} to="/mypage">
              내가쓴글
            <span></span>
              </Button>}

          </div>

      </MainbannerBlock> 
  )
}