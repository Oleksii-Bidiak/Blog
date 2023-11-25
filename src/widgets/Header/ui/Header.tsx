import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import cls from "./header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          Home
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </header>
  );
};
