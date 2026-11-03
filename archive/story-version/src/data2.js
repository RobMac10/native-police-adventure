// Story data, part 2: endings.
Object.assign(window.NPA.nodes, {

end_report: { id: 'end_report', end: true, title: 'The report', kind: 'You followed the order', text: [
  'You ride in with the others. It is almost light.',
  'This story does not describe what happens next. The official report that evening uses one word for it, and that word is dispersal.',
  'You ride back to the station. Mr Carver is told that the district will be quiet now. The report is short. It does not say how many people were there, who they were or what their names were. It does not mention you.',
  'You stay in the force for years. You are sent north when the frontier moves. Nobody asks you about that morning, and you do not speak of it. You are fed, clothed and armed by the force, and you are still a long way from your own country.'
 ],
 summary: 'Billy followed the order. The story does not describe the violence, because the people in the camp are the people this history belongs to, and their suffering should not be used for entertainment. Many troopers did follow orders, and many had very little choice.',
 real: [
  { t: 'Records of the time call this kind of event a “dispersal”. The records were written by officers and settlers. Very little is known from the troopers themselves, and almost nothing is known about what the troopers felt.', src: ['burke', 'nulungu'] },
  { t: 'The Native Mounted Police were formally disbanded in 1904. In 1880 the Commissioner of Police wrote that detachments were being broken up, and that troopers were being sent to ordinary police stations as trackers.', src: ['nulungu', 'qsa'] }
 ],
 teacher: { about: 'The most common historical outcome of this kind of patrol. It is deliberately not described.', ask: [ 'Why does the story leave out what happens in the camp?', 'Does leaving it out hide the truth, or respect the people involved? Argue both sides.' ], answers: [ 'It treats the people in the camp with respect. It avoids turning violence into entertainment. Students may argue that leaving it out lets readers avoid the facts, so the Behind the Story section and the real history panels are there to state them plainly. Either view can be well argued.', 'Look for students who use the real history panels as evidence.' ] }
},

end_irons: { id: 'end_irons', end: true, title: 'Irons', kind: 'You were punished', text: [
  'Hale decides your punishment the next morning. It is carried out in the yard in front of the other troopers. This story does not describe it.',
  'You are not shot and you are not freed. You stay in the force under watch. For a long time Doyle does not let you carry a carbine.',
  'Your refusal did not change what the force did next. The force moved north and west with the frontier, and new troopers were recruited. The others in the camp saw what happens to a man who refuses an order.'
 ],
 summary: 'Billy was harmed for what he chose. The story shows that a trooper who refused or left had very few safe options, and that one man’s refusal did not stop the force.',
 real: [
  { t: 'The records show that troopers were punished harshly. In the 1863 petition of Georgey, a trooper says he was put in irons and that he knew troopers who left had been shot. An 1876 inquiry heard evidence of floggings. Historian Jonathan Richards lists ten troopers who were shot for desertion.', src: ['georgey', 'burke'] }
 ],
 teacher: { about: 'Based on the recorded treatment of troopers. The punishment is not described.', ask: [ 'Did Billy’s refusal achieve anything? Does it matter if it did not?' ], answers: [ 'It did not stop the patrol. Students may still argue that refusing was a moral act. Historians do not judge the troopers simply, because they had very limited choices.' ] }
},

end_leave: { id: 'end_leave', end: true, title: 'Leaving', kind: 'You left the force', text: [
  'You travel at night and hide in the day. You walk south, away from the camp, with nothing that belongs to the force.',
  'After some days you reach a river you do not know. You are hungry. You do not know whether the people of this country will welcome a man who wore the uniform of the force that hunted them.',
  'Some people give you water. Others turn away. At a station a long way from the camp, a stockman gives you a meal. He says there is work for food if you want it. You do not tell him where you have come from.',
  'He asks your name. You give him the one from your own country.'
 ],
 summary: 'Billy left. He was free of the camp but far from home, with no safe place to go. The story does not say whether he reached his country.',
 real: [
  { t: 'Desertion was common. Many men left, and some were hunted. Georgey, who left in 1862, said he had not left sooner because he was afraid of being put into the bush far from his own people.', src: ['burke', 'georgey'] },
  { t: 'People who survived the frontier years in Central Queensland were often used as cheap labour on stations, or lived on the edges of towns.', src: ['woor'] }
 ],
 teacher: { about: 'Leaving was possible, but it was dangerous. The ending is hopeful in one small way, with Billy using his own name.', ask: [ 'Why does it matter that Billy gives his own name?' ], answers: [ 'In the force troopers were given English names. Using his own name shows he is taking back some of who he is. Students should link this to the idea that names are part of identity.' ] }
},

end_stand: { id: 'end_stand', end: true, title: 'The people at the spring', kind: 'You asked to go with the people', text: [
  'The old woman speaks to the old men. They talk for a long time and nobody tells you what they say. The young man who speaks English looks at you and says nothing.',
  'At last she says you may come with them as far as the first water, and that after that they will decide. You take off your jacket. You leave the carbine on the ground beside the spring. The old woman looks at it and does not touch it.',
  'Before light the camp is empty. The people go up into the ranges, and you go with them.',
  'The story does not say what happens next. The patrol will find the jacket and the carbine, and Hale will know what you did. The force will look for you. Whether you are allowed to stay, and for how long, is a decision for the people. It is their country and it is their right to decide.'
 ],
 summary: 'This ending is invented. No record is known of a trooper doing this. It is included to show that the local people made their own decisions, and that Billy had no right to expect to be welcomed.',
 real: [
  { t: 'There is no known record of a trooper joining a group he had been sent against. The story marks it as invented. Records of the time were written by officers and settlers, so the choices made by Aboriginal people at the time are mostly not recorded.', src: ['burke'] }
 ],
 teacher: { about: 'The most hopeful ending, and the least supported by the records. Ask students to look at it critically.', ask: [ 'Is this ending realistic? What is missing from the records that makes it hard to say?' ], answers: [ 'It is invented, and it is not shown to be realistic. Students should explain that the historical record does not tell us what troopers and local people felt or decided, and that the story avoids inventing details about the people’s culture.' ] }
},

end_empty: { id: 'end_empty', end: true, title: 'The empty camp', kind: 'You did one small thing', text: [
  'Hale looks at you for a long time. Then he turns away. “The camp was empty,” he says, and he writes it in his report.',
  'The patrol goes back to the camp. Nobody tells you whether the people at the spring got away, or whether they were the people who camped at the waterhole, or whether anyone from that camp had anything to do with the stockman.',
  'You stay in the force. There will be other patrols, and you cannot lead all of them the wrong way. What you did was small. It was not nothing, and it was not enough.',
  'Two years later the Commissioner of Police writes that some detachments are to be broken up. You do not know whether that will change anything for the people you meet.'
 ],
 summary: 'Billy did one small thing and kept quiet. The story shows that a small act could matter to the people who were spared, and that it did not change the system.',
 real: [
  { t: 'On 1 June 1880 the Commissioner of Police wrote that several detachments had been broken up, and that the troopers had been placed at ordinary police stations as trackers, as part of “the gradual disembodying of the Native Police Force”.', src: ['qsa'] },
  { t: 'The Native Mounted Police were formally disbanded in 1904.', src: ['nulungu'] }
 ],
 teacher: { about: 'A middle path between refusal and obedience.', ask: [ 'Is a small act worth doing if it does not change the system? What would the people at the spring say?' ], answers: [ 'Open question. Students should avoid deciding on behalf of the people the story is about. They can say what we know and what we cannot know.' ] }
}

});
