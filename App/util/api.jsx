export const fetchImages = async () => {
    const response = await fetch('https://unsplash.it/list');
    const images = await response.json();
  
    return images;
  };
  
  export const getImageFromId = id =>
    `https://unsplash.it/${600}/${600}?image=${id}`;

  console.log(getImageFromId);  

  export const getTitleFromId =  id => "Gadchiroli Police says 26 Maoists killed in encounter"   ;


  export const getDataFromId = id => 'The Supreme Court Wednesday said it is a “sorry state of affairs” in Tihar Jail which has become a den of criminals and murders are happening there, while directing the Home Ministry to take immediate steps on prison reforms and enhance management.' + '\n' +

  'The apex court also expressed annoyance over the Ministry of Home Affairs (MHA) not filing an action plan and report on steps taken on the suggestions given by Delhi Commissioner of Police Rakesh Asthana.' + '\n'
  
  +
  
  'The top court was informed by Delhi Police that it has registered an FIR under various sections of Prevention of Corruption Act and IPC against 37 persons with regard to collusion with realty firm Unitech’s imprisoned ex-promoters Sanjay and Ajay Chandra.' + '\n' 
  
  +
  
  'The Enforcement Directorate had made a startling revelation recently that it had unearthed a “secret underground office” here which was being operated by erstwhile Unitech founder Ramesh Chandra and visited by his sons Sanjay and Ajay when on parole or bail.' + '\n' 
  
  
  +
  
  'Both Sanjay and Ajay who are in jail since August 2017 are accused of allegedly siphoning home buyers’ money.' + '\n' +
  
  'A bench of Justices D Y Chandrachud and M R Shah said Asthana\’s report has recommended installation of CCTV cameras, mobile jammers, body scanners and other security measures in Tihar Jail but there is no report before it on the compliance of the October 6 order by MHA.' + '\n' +
  
  'It is a sorry state of affairs in Tihar Jail. We have read in newspapers two-three days back that murder is happening in the jail. It has become a den for criminals. The concerned secretary in MHA should file an action plan and a report on steps taken so far on the suggestions given by Delhi Commissioner of Police Rakesh Asthana within three weeks,” the bench said.' + '\n' +
  
  'Take immediate and prompt steps and file a report. Neither has any action plan been submitted nor any status report has been filed by the MHA on the steps taken so far,\” it added.' + '\n' +
  
  'At the outset, Additional Solicitor General K M Nataraj, appearing for Delhi Police, informed the top court that it has registered FIR under various Sections of Prevention of Corruption Act and Indian Penal Code which include 32 jail officials, the Chandras as well as one associate and two of their staff for collusion and carrying out unauthorised activities from the prison.'
  
  ;