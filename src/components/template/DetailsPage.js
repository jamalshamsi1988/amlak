import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import styles from "@/template/DetailsPage.module.css";
import Title from "@/module/Title";
import ItemList from "@/module/ItemList";
import { BiStore } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
import { e2p, sp } from "@/utils/reaplaceNumber";

const DetailsPage = ({ data: {
  title,
  location,
  description,
  amenities,
  rules,
  realState,
  phone,
  price,
  category,
  constructionDate,
},}) => {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات </Title>
        <p>{description}</p>
        <Title>امکانات رفاهی </Title>
        <ItemList data={amenities} />
        <Title>قوانین </Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidbar}>
        <div className={styles.realState}>
        <SiHomebridge/>
        <p> املاک{realState}</p>
        <span><AiOutlinePhone/> {e2p(phone)}</span>
        </div>
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)}تومان</p>
          <p><BiCalendarCheck/>
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
