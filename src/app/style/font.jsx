import { css } from 'styled-components'
import PretendardBold from './fonts/woff2-subset/Pretendard-Bold.subset.woff2'
import PretendardMedium from './fonts/woff2-subset/Pretendard-Medium.subset.woff2'
import PretendardRegular from './fonts/woff2-subset/Pretendard-Regular.subset.woff2'
import PretendardBoldWoff from './fonts/woff-subset/Pretendard-Bold.subset.woff'
import PretendardMediumWoff from './fonts/woff-subset/Pretendard-Medium.subset.woff'
import PretendardRegularWoff from './fonts/woff-subset/Pretendard-Regular.subset.woff'
const font = css`
@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(${PretendardBold}) format('woff2'), url(${PretendardBoldWoff}) format('woff');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Bold'), url(${PretendardMedium}) format('woff2'), url(${PretendardMediumWoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Bold'), url(${PretendardRegular}) format('woff2'), url(${PretendardRegularWoff}) format('woff');
}


@font-face {
    font-family: 'BMkkubulimTTF-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/BMkkubulimTTF-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`

export default font