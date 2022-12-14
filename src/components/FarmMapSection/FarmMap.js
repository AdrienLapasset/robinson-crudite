import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  margin-top: -100px;
  svg {
    margin: auto;
    display: block;
    stroke: black;
    stroke-width: 2;
    fill: ${(props) => props.theme.colors.background};
    g {
      transition: all 0.2s;
      &:hover {
        transform: translateY(-5px);
        filter: drop-shadow(0px 7px 0px #000000);
      }
    }
  }
`;

const FarmMap = ({ activeParcelleCallBack }) => {
  return (
    <StyledContainer>
      <svg
        width="963"
        height="440"
        viewBox="0 0 963 424"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g onMouseOver={() => activeParcelleCallBack(0)}>
          <path
            id="contour"
            d="M356.627 208.393L170.101 316.084C167.948 317.326 164.459 317.326 162.306 316.084L8.88858 227.508C6.73628 226.265 6.73626 224.251 8.88859 223.008L195.415 115.317C197.567 114.074 201.057 114.074 203.209 115.317L356.627 203.893C358.78 205.135 358.78 207.15 356.627 208.393Z"
          />
        </g>
        <g onMouseOver={() => activeParcelleCallBack(1)}>
          <path
            id="Vector"
            d="M545.202 97.8257L391.785 186.402C389.632 187.644 386.143 187.644 383.99 186.402L230.572 97.8257C228.42 96.583 228.42 94.5683 230.572 93.3257L383.99 4.74983C386.143 3.50719 389.632 3.50719 391.785 4.74983L545.202 93.3257C547.355 94.5683 547.355 96.583 545.202 97.8257Z"
          />
        </g>
        <g onMouseOver={() => activeParcelleCallBack(2)}>
          <path
            id="Vector_2"
            d="M759.158 217.663L605.74 306.238C603.587 307.481 600.098 307.481 597.945 306.238L424.662 206.193C422.51 204.951 422.51 202.936 424.662 201.693L578.08 113.118C580.232 111.875 583.722 111.875 585.874 113.118L759.158 213.163C761.31 214.405 761.31 216.42 759.158 217.663Z"
          />
        </g>
        <g id="Parcelle 5">
          <path
            id="Vector_3"
            d="M954.512 330.451L801.094 419.027C798.942 420.27 795.452 420.27 793.3 419.027L717.716 375.389C715.564 374.146 715.564 372.131 717.716 370.889L871.134 282.313C873.286 281.07 876.776 281.07 878.928 282.313L954.512 325.951C956.664 327.194 956.664 329.209 954.512 330.451Z"
          />
        </g>
        <g id="Batiment">
          <path
            id="Vector_5"
            d="M659.289 372.305L657.87 389.419C657.725 391.174 655.142 392.529 652.102 392.445L575.69 390.334C572.65 390.25 570.303 388.759 570.449 387.004L571.867 369.89C572.013 368.134 574.595 366.78 577.636 366.864L654.047 368.975C657.087 369.059 659.434 370.55 659.289 372.305Z"
          />
        </g>
        <g id="Serre">
          <path
            id="Vector_6"
            d="M580.09 334.263L539.241 357.848C537.089 359.09 533.599 359.09 531.447 357.848L344.92 250.156C342.768 248.914 342.768 246.899 344.92 245.656L385.769 222.072C387.922 220.829 391.411 220.829 393.564 222.072L580.09 329.763C582.242 331.006 582.242 333.021 580.09 334.263Z"
          />
        </g>
        <g id="Parcelle 4">
          <path
            id="Vector_7"
            d="M891.78 255.462L705.253 363.153C703.101 364.396 699.611 364.396 697.459 363.153L643.366 331.923C641.214 330.68 641.214 328.666 643.366 327.423L829.893 219.732C832.045 218.489 835.535 218.489 837.687 219.732L891.78 250.962C893.932 252.205 893.932 254.22 891.78 255.462Z"
          />
        </g>
      </svg>
    </StyledContainer>
  );
};

export default FarmMap;
