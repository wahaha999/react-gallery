import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTab } from "../../store/images";
import { getTab } from "../../store/images/selectors";
import * as Style from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getTab);
  const handleSelect = useCallback(
    (tabName: string) => {
      dispatch(selectTab(tabName));
    },
    [dispatch]
  );

  return (
    <>
      <Style.DesktopHeader>
        <Style.LogoWidget>Gallery</Style.LogoWidget>
        <Style.TabWidget>
          <Style.Button
            left={6}
            right={0}
            active={tab === "All" ? true : false}
            onClick={() => handleSelect("All")}
          >
            All
          </Style.Button>
          <Style.Button
            left={0}
            right={6}
            active={tab === "All" ? false : true}
            onClick={() => handleSelect("Bookmarked")}
          >
            Bookmarked
          </Style.Button>
        </Style.TabWidget>
      </Style.DesktopHeader>
    </>
  );
};

export default Header;
