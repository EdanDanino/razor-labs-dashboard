import styled from "styled-components";
import { HEADER_HEIGHT } from "../shared/consts";

const DataMindLogo = () => (
  <svg
    width="142"
    height="16"
    viewBox="0 0 142 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 1.348v14.064L14.337 8 0 .588v.76z" fill="#12FFE2" />
    <path
      d="M28.32 2.828a6.219 6.219 0 0 1 2.54 2.443c.601 1.048.9 2.257.9 3.629 0 1.371-.299 2.564-.9 3.62a6.188 6.188 0 0 1-2.55 2.452c-1.101.58-2.377.87-3.827.87H19.28V1.958h5.202c1.463 0 2.742.29 3.836.87zm-1.069 9.039c.712-.7 1.068-1.689 1.068-2.967 0-1.279-.356-2.275-1.068-2.986-.712-.712-1.707-1.068-2.986-1.068h-1.602v8.069h1.602c1.279 0 2.274-.35 2.986-1.048zM33.63 7.318c.428-.857 1.011-1.516 1.75-1.978a4.567 4.567 0 0 1 2.472-.692c.778 0 1.46.158 2.047.475.587.316 1.038.731 1.355 1.246V4.806h3.382v11.036h-3.382V14.28c-.33.514-.788.93-1.375 1.246-.586.316-1.268.474-2.047.474a4.49 4.49 0 0 1-2.452-.702c-.739-.468-1.322-1.134-1.75-1.997-.429-.864-.643-1.862-.643-2.997 0-1.134.214-2.129.643-2.986zm6.922 1.009a2.282 2.282 0 0 0-1.711-.732c-.672 0-1.243.24-1.71.722-.468.481-.703 1.144-.703 1.987 0 .844.235 1.513.702 2.008a2.266 2.266 0 0 0 1.711.741c.672 0 1.243-.244 1.71-.731.468-.488.703-1.154.703-1.998 0-.843-.235-1.51-.702-1.997zM53.239 12.974v2.868h-1.72c-1.227 0-2.183-.3-2.868-.9-.686-.6-1.029-1.58-1.029-2.937v-4.39h-1.345V4.805h1.345v-2.69h3.382v2.69h2.215v2.808h-2.215v4.43c0 .33.08.567.238.713.158.145.422.217.79.217h1.207zM55.088 7.318c.428-.857 1.012-1.516 1.75-1.978a4.567 4.567 0 0 1 2.473-.692c.778 0 1.46.158 2.047.475.586.316 1.038.731 1.354 1.246V4.806h3.382v11.036h-3.382V14.28c-.329.514-.788.93-1.374 1.246-.587.316-1.269.474-2.047.474a4.49 4.49 0 0 1-2.453-.702c-.738-.468-1.322-1.134-1.75-1.997-.428-.864-.643-1.862-.643-2.997 0-1.134.215-2.129.643-2.986zm6.922 1.009a2.282 2.282 0 0 0-1.71-.732c-.673 0-1.244.24-1.711.722-.468.481-.702 1.144-.702 1.987 0 .844.234 1.513.702 2.008a2.266 2.266 0 0 0 1.71.741c.673 0 1.243-.244 1.711-.731.468-.488.702-1.154.702-1.998 0-.843-.234-1.51-.702-1.997z"
      fill="#01152B"
    />
    <path
      d="M84.27 1.958v13.884h-3.382V7.515l-3.105 8.327h-2.73L71.93 7.496v8.346h-3.382V1.958h3.995l3.896 9.612 3.857-9.612h3.975zM86.95 3.135a1.698 1.698 0 0 1-.564-1.296c0-.514.188-.966.564-1.315.375-.349.86-.524 1.453-.524.594 0 1.058.175 1.434.524.376.35.564.788.564 1.315 0 .527-.188.947-.564 1.296-.376.349-.853.524-1.434.524-.58 0-1.078-.175-1.453-.524zm3.134 1.67v11.037h-3.382V4.806h3.382zM102.356 5.943c.772.838 1.157 1.988 1.157 3.452v6.447h-3.362V9.849c0-.738-.19-1.312-.573-1.72-.383-.409-.897-.613-1.543-.613-.646 0-1.16.204-1.543.613-.382.408-.573.982-.573 1.72v5.993h-3.382V4.806h3.382V6.27a3.567 3.567 0 0 1 1.384-1.157c.58-.284 1.232-.426 1.958-.426 1.293 0 2.324.419 3.095 1.256zM105.837 7.318c.429-.858 1.012-1.516 1.751-1.978a4.565 4.565 0 0 1 2.472-.692c.725 0 1.387.151 1.987.455a3.628 3.628 0 0 1 1.415 1.226V1.207h3.382v14.635h-3.382V14.26c-.317.527-.769.949-1.355 1.265-.587.317-1.269.475-2.047.475-.91 0-1.734-.234-2.472-.702-.739-.468-1.322-1.134-1.751-1.998-.428-.863-.642-1.862-.642-2.996s.214-2.129.642-2.986zm6.922 1.008a2.28 2.28 0 0 0-1.71-.731c-.673 0-1.243.24-1.711.722-.468.481-.702 1.144-.702 1.987 0 .844.234 1.513.702 2.008a2.266 2.266 0 0 0 1.711.741 2.28 2.28 0 0 0 1.71-.732c.468-.487.703-1.153.703-1.997 0-.844-.235-1.51-.703-1.998zM132.131 13.39h-5.181l-.831 2.452h-3.54l5.023-13.884h3.916l5.024 13.884h-3.58l-.831-2.453zm-.87-2.611-1.72-5.083-1.701 5.083h3.421zM141.447 1.958v13.884h-3.382V1.958h3.382z"
      fill="#7071F3"
    />
  </svg>
);

const HeaderContainer = styled.header<{ height: string }>`
  display: flex;
  width: calc(100% - 80px);
  height: ${(props) => props.height};
  top: 0;
  position: absolute;
  left: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  box-shadow: 0 2px 8px 0 rgba(2, 29, 61, 0.12);
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
`;

export const Header = () => {
  return (
    <HeaderContainer height={HEADER_HEIGHT}>
      <DataMindLogo />
    </HeaderContainer>
  );
};
