import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import styled from "styled-components";

function sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Sonny Sangha
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default sidebar;

const SidebarContainer = styled.div``;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;
