import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Container = styled.div`
  font-family: sans-serif;
  color: #be123c;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  // padding-top: 18px;
`;
interface ISeemore {
    href: string;
}

const SeeMore = ({ href }: ISeemore): JSX.Element => {
    const { t } = useTranslation("home");

    return (
        <Link href={href} style={{ cursor: "pointer" }}>
            <Container>{t("home:seeMore")} &gt;</Container>
        </Link>
    );
};

export default SeeMore;
