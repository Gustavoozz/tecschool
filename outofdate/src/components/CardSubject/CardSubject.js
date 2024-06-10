import { CardContainerSubject, IconContainerSubject } from "./Style"
import { SemiBoldText, SubTitle } from "../Title/Title";
import { TextContainer } from "../CardHome/Style";

export const CardSubject = ({ icon, subjectName, teacherName }) => {
    return(        
        <CardContainerSubject>
            <IconContainerSubject>
           {icon}
            </IconContainerSubject>

            <TextContainer style={{ width: '100%', marginLeft: 0}}>
               <SemiBoldText style={{ width: '100%', textAlign: "center", marginTop: 10 }}>{subjectName}</SemiBoldText>
               <SubTitle style={{ width: '100%', textAlign: "center" }}>{teacherName}</SubTitle>
            </TextContainer>

            
        </CardContainerSubject>
            
     
    )
}