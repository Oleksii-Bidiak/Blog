import { useTranslation } from "react-i18next";

const HomePage = () => {
	const {t} = useTranslation()
  return <div>
		{t('Головна')}
  </div>;
};

export default HomePage;
