import React from "react";
import { Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./login/Login";
import UserRegistration from "./login/UserRegistration";
import ForgotPass from "./login/ForgotPass"
import UserProfile from "./user/Profile_user/UserProfile";
import UpdatePForm from "./user/Profile_user/UpdateProfileForm";
import MemberEvent from "./user/Membership/Membership_event";
import MembershipDetails from "./user/Membership/Membership_Details";
import MembershipForm from "./user/Membership/MembershipForm";
import MembershipTransaction from "./user/Membership/MembershipTransaction";
import ChampionshipSelection from "./user/ChampionshipEvent/EventRegistration";
import EventTransaction from "./user/ChampionshipEvent/EventTransaction";
import EventSlot from "./user/ChampionshipEvent/EventSlot";
import Settings from "./association secretary/Settings";
import MembershipSetting from "./association secretary/Type_of_membership/MembershipSetting";
import EditMembershipSetting from "./association secretary/Type_of_membership/EditMembershipSetting";
import BankAccountList from "./association secretary/Association_bank_accounts/BankAccountList";
import SubBankAccount from "./association secretary/Association_bank_accounts/SubBankAccount";
import Club from "./association secretary/Manage_club/Club";
import ClubRegisterDetails from "./association secretary/Manage_club/ClubRegisterDetails";
import ClubTransactionDetails from "./association secretary/Manage_club/ClubTransactiondetails";
import ManageChampionship from "./association secretary/Manage_Championship/ManageChampionship";
import EventSetting from "./association secretary/Manage_Championship/EventSetting";
import EventSlotSetting from "./association secretary/Manage_Championship/EventSlotSetting";
import MembershipFeesVerification from "./staff login (association)/MembershipFeesVerification";
import TransactionDetailsVerification from "./staff login (association)/TransactionDetailsVerification";
import EventFeesVerification from "./event staff login (association)/EventFeesVerification";
import MembershipFormDetails from "./user/Membership/MembershipFormDetails";
import EventsEligible from "./user/ChampionshipEvent/EventsEligible";
import MembershipVerification from "./user/Membership/Membership_Verification";
import MembershipApplicationDetails from "./user/Membership/MembershipApplicationDetails";
import MembershipApproval from "./user/Membership/MembershipApproval";
import MembershipApprovalApplicationDetails from "./user/Membership/MembershipApprovalApplicationDetails";
import ParticipantsList from "./staff login (association)/EventWiseParticipationList";
import ScoreEntry from "./staff login (association)/EventScore";
import GenerateRankList from "./staff login (association)/GenerateRankList";
import DownloadCertificate from "./user/DownloadCertificate";
import ComputerCardPdf from "./user/Computer_CardPdf";
import IDCardpdf from "./user/IDCardpdf";

function App(){
    return (
       <Routes>
        <Route path = '/' element={<Login />} />
        <Route path = '/user_registration' element={<UserRegistration />} />
        <Route path = '/forgot_pass' element={<ForgotPass />} />
        <Route path = '/user_profile' element={<UserProfile />} />

        <Route path = '/update_pform' element={<UpdatePForm />} />
        <Route path = '/member_event' element={<MemberEvent />} />
        <Route path = '/membershipdetail' element={<MembershipDetails/>} />
        <Route path = '/membershipform' element={<MembershipForm/>} />
        <Route path = '/membershipformdetails' element={<MembershipFormDetails/>} />
        <Route path = '/TransactionMembership' element={<MembershipTransaction />} />
        <Route path = '/membershipVerification' element={<MembershipVerification />} />
        <Route path = '/ApplicationDetails' element={<MembershipApplicationDetails />} />
        <Route path = '/MembershipApproval' element={<MembershipApproval />} />
        <Route path = '/MembershipApprovalApplicationDetails' element={<MembershipApprovalApplicationDetails />} />
        <Route path = '/DownloadCertificate' element={<DownloadCertificate />} />
        <Route path = '/ComputerCardPdf' element={<ComputerCardPdf />} />
        <Route path = '/IDCardpdf' element={<IDCardpdf />} />

        <Route path = '/ChampionshipSelection' element={<ChampionshipSelection />} />
        <Route path = '/EventsEligible' element={<EventsEligible />} />
        <Route path = '/EventTransaction' element={<EventTransaction />} />
        <Route path = '/EventSlot' element={<EventSlot />} />

        <Route path = '/SettingsAssociation' element={<Settings />} />

        <Route path = '/MembershipSetting' element={<MembershipSetting />} />
        <Route path = '/EditMembershipSetting' element={<EditMembershipSetting />} />

        <Route path = '/BankAccountList' element={<BankAccountList />} />
        <Route path = '/SubBankAccount' element={<SubBankAccount /> } />

        <Route path = '/Club' element={<Club />} />
        <Route path = '/ClubRegisterDetails' element={<ClubRegisterDetails />} />
        <Route path = '/ClubTransactionDetails' element={<ClubTransactionDetails />} />

        <Route path = '/ManageChampionship' element={<ManageChampionship />} />
        <Route path = '/EventSetting' element={<EventSetting />} />
        <Route path = '/EventSlotSetting' element={<EventSlotSetting />} />

        <Route path = '/MembershipFeesVerification' element={<MembershipFeesVerification />} />
        <Route path= '/TransactionDetailsVerification' element={<TransactionDetailsVerification />} />
        <Route path = '/ParticipantsList' element={<ParticipantsList />} />
        <Route path = '/ScoreEntry' element={<ScoreEntry />} />
        <Route path = '/GenerateRankList' element={<GenerateRankList />} />

        <Route path= '/EventFeesVerification' element={<EventFeesVerification />} />

       </Routes>
       
    );
}
export default App;