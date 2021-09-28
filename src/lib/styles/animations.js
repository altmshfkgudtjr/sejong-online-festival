import { keyframes } from 'styled-components';

export const sildeDown = v => keyframes`
  from { height: 36px; }
	to { height: ${v + 'px'}; }
`;

export const slideInLeft = keyframes`
	from { transform: translateX(-100%); }
	to { transform: translateX(0%); }
`;

export const slideInRight = keyframes`
	from { transform: translateX(100%); }
	to { transform: translateX(0%); }
`;

export const slideInBottom = keyframes`
	from { transform: translateY(100%); }
	to { transform: translateY(0%); }
`;

export const slideOutLeft = keyframes`
	from { transform: translateX(0%); }
	to { transform: translateX(-100%); }
`;

export const slideOutRight = keyframes`
	from { transform: translateX(0%); }
	to { transform: translateX(100%); }
`;

export const slideOutBottom = keyframes`
	from { transform: translateY(0%); }
	to { transform: translateY(100%); }
`;

export const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity 1; }
`;

export const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity 0; }
`;

export const fadeInBottom = keyframes`
	from { transform: translateY(100%); opacity: 0; }
	to { transform: translateY(0%); opacity: 1; }
`;

export const zoomIn = v => keyframes`
	from { transform: scale(${v}) };
	to { transform: scale(1) };
`;

export const blink = keyframes`
	0% { opacity: .2; }
	30% { opacity: .4; }
	80% { opacity: .2; }
	100% { opacity: .2; }
`;

export const load = keyframes`
	0%,
  80%,
  100% {
    box-shadow: 0 20px 0 -12px;
  }
  40% {
    box-shadow: 0 20px 0 0;
  }
`;

export const spin = keyframes`
	100% { transform: rotate(360deg); }
`;
