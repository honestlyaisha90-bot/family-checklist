{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 AppleColorEmoji;\f2\fswiss\fcharset0 Helvetica;
}
{\colortbl;\red255\green255\blue255;\red150\green135\blue96;\red23\green23\blue23;\red202\green202\blue202;
\red211\green83\blue92;\red70\green137\blue204;\red140\green211\blue254;\red163\green79\blue131;\red238\green46\blue56;
\red109\green109\blue109;\red79\green123\blue61;\red251\green0\blue255;\red191\green80\blue83;}
{\*\expandedcolortbl;;\cssrgb\c65490\c59608\c45098;\cssrgb\c11765\c11765\c11765;\cssrgb\c83137\c83137\c83137;
\cssrgb\c86667\c41569\c43529;\cssrgb\c33725\c61176\c83922;\cssrgb\c61176\c86275\c99608;\cssrgb\c70588\c40000\c58431;\cssrgb\c95686\c27843\c27843;
\cssrgb\c50196\c50196\c50196;\cssrgb\c37647\c54510\c30588;\cssrgb\c100000\c0\c100000;\cssrgb\c80000\c40000\c40000;}
\margl1440\margr1440\vieww28600\viewh15620\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \{ \cf5 \strokec5 useState\cf4 \strokec4 , \cf5 \strokec5 useEffect\cf4 \strokec4  \} \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 "react"\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 days\cf4 \strokec4  = [\cf6 \strokec6 "Monday"\cf4 \strokec4 , \cf6 \strokec6 "Tuesday"\cf4 \strokec4 , \cf6 \strokec6 "Wednesday"\cf4 \strokec4 , \cf6 \strokec6 "Thursday"\cf4 \strokec4 , \cf6 \strokec6 "Friday"\cf4 \strokec4 , \cf6 \strokec6 "Saturday"\cf4 \strokec4 , \cf6 \strokec6 "Sunday"\cf4 \strokec4 ];\cb1 \
\
\cf7 \cb3 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 weekdayTasks\cf4 \strokec4  = [\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "fajr"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Pray Fajr"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57113 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "bed"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Make bed + clean room"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u57039 \u65039 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "teeth"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Brush teeth + get dressed"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f2 \uc0\u55358 \u56997 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "workbook"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Complete summer workbook page"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56531 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "khan"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Complete one Khan Academy math skill"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55358 \u56814 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "quran"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Quran class or Quran practice"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56534 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "chore"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Complete daily chore"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55358 \u56825 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "gym"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Gym / physical activity"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56490 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "lunch"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Help prep lunch"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55358 \u56663 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "tv"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "TV / Tech Time earned"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56561 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "special"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Special activity completed"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u11088 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "dinner"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Help prep dinner"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57213 \u65039 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3   \{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "pool"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Pool day (goal: 3x/week)"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57290 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 saturdayTasks\cf4 \strokec4  = [\{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "sat-family"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Family Day 
\f1 \uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 
\f0 "\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57144 
\f0 "\cf4 \strokec4  \}];\cb1 \
\cf7 \cb3 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 sundayTasks\cf4 \strokec4  = [\{ \cf5 \strokec5 id:\cf4 \strokec4  \cf6 \strokec6 "sun-rest"\cf4 \strokec4 , \cf5 \strokec5 label:\cf4 \strokec4  \cf6 \strokec6 "Rest Day 
\f1 \uc0\u55356 \u57151 
\f0 "\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u9729 \u65039 
\f0 "\cf4 \strokec4  \}];\cb1 \
\
\cf7 \cb3 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 kids\cf4 \strokec4  = \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 sana:\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 name:\cf4 \strokec4  \cf6 \strokec6 "Sana"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57144 
\f0 "\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 avatar:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56423 
\f0 "\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 gradient:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #c9748f 0%, #a855b5 100%)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 accent:\cf4 \strokec4  \cf6 \strokec6 "#c9748f"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 accent2:\cf4 \strokec4  \cf6 \strokec6 "#a855b5"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 light:\cf4 \strokec4  \cf6 \strokec6 "#fdf2f8"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 light2:\cf4 \strokec4  \cf6 \strokec6 "#f3e8ff"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 progressBg:\cf4 \strokec4  \cf6 \strokec6 "#f3e8ff"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 progressFill:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(90deg, #c9748f, #a855b5)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 bannerBg:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #fef3c7, #fde68a)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 specialActivities:\cf4 \strokec4  [\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Monday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Library Day + Jiu Jitsu"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56538 \u55358 \u56651 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Tuesday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Baking Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55358 \u56769 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Wednesday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Crafting Day + Jiu Jitsu"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u9986 \u65039 \u55358 \u56651 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Thursday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Sports / Pool Focus"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u9917 \u55356 \u57290 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Friday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Free Choice Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57119 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Saturday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Family Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Sunday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Rest + Prep for Week"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57151 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3     ],\cb1 \
\cb3     \cf5 \strokec5 celebrate:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57225 
\f0  Amazing day, Sana!"\cf4 \strokec4 ,\cb1 \
\cb3   \},\cb1 \
\cb3   \cf5 \strokec5 zayd:\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 name:\cf4 \strokec4  \cf6 \strokec6 "Zayd"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57280 
\f0 "\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 avatar:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56422 
\f0 "\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 gradient:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #3b82f6 0%, #059669 100%)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 accent:\cf4 \strokec4  \cf6 \strokec6 "#3b82f6"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 accent2:\cf4 \strokec4  \cf6 \strokec6 "#059669"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 light:\cf4 \strokec4  \cf6 \strokec6 "#eff6ff"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 light2:\cf4 \strokec4  \cf6 \strokec6 "#ecfdf5"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 progressBg:\cf4 \strokec4  \cf6 \strokec6 "#dbeafe"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 progressFill:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(90deg, #3b82f6, #059669)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 bannerBg:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #dbeafe, #d1fae5)"\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 specialActivities:\cf4 \strokec4  [\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Monday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Library Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56538 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Tuesday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Baking Day + Basketball Practice"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55358 \u56769 \u55356 \u57280 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Wednesday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Crafting Day + Basketball Practice"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u9986 \u65039 \u55356 \u57280 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Thursday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Sports / Pool Focus"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u9917 \u55356 \u57290 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Friday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Free Choice Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57119 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Saturday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Family Day"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3       \{ \cf5 \strokec5 day:\cf4 \strokec4  \cf6 \strokec6 "Sunday"\cf4 \strokec4 , \cf5 \strokec5 activity:\cf4 \strokec4  \cf6 \strokec6 "Rest + Prep for Week"\cf4 \strokec4 , \cf5 \strokec5 emoji:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57151 
\f0 "\cf4 \strokec4  \},\cb1 \
\cb3     ],\cb1 \
\cb3     \cf5 \strokec5 celebrate:\cf4 \strokec4  \cf6 \strokec6 "
\f1 \uc0\u55356 \u57286 
\f0  Crushed it, Zayd!"\cf4 \strokec4 ,\cb1 \
\cb3   \},\cb1 \
\cb3 \};\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 function\cf4 \strokec4  \cf9 \strokec9 getTasksForDay\cf4 \strokec4 (\cf5 \strokec5 day\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 saturdayTasks\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Sunday"\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 sundayTasks\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 weekdayTasks\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 function\cf4 \strokec4  \cf9 \strokec9 getCurrentWeekKey\cf4 \strokec4 (\cf5 \strokec5 kidName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 now\cf4 \strokec4  = \cf7 \strokec7 new\cf4 \strokec4  \cf10 \strokec10 Date\cf4 \strokec4 ();\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 startOfYear\cf4 \strokec4  = \cf7 \strokec7 new\cf4 \strokec4  \cf10 \strokec10 Date\cf4 \strokec4 (\cf5 \strokec5 now\cf4 \strokec4 .\cf9 \strokec9 getFullYear\cf4 \strokec4 (), \cf11 \strokec11 0\cf4 \strokec4 , \cf11 \strokec11 1\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 week\cf4 \strokec4  = \cf10 \strokec10 Math\cf4 \strokec4 .\cf9 \strokec9 ceil\cf4 \strokec4 (((\cf5 \strokec5 now\cf4 \strokec4  - \cf5 \strokec5 startOfYear\cf4 \strokec4 ) / \cf11 \strokec11 86400000\cf4 \strokec4  + \cf5 \strokec5 startOfYear\cf4 \strokec4 .\cf9 \strokec9 getDay\cf4 \strokec4 () + \cf11 \strokec11 1\cf4 \strokec4 ) / \cf11 \strokec11 7\cf4 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 `\cf7 \strokec7 $\{\cf5 \strokec5 kidName\cf7 \strokec7 \}\cf6 \strokec6 -week-\cf7 \strokec7 $\{\cf5 \strokec5 now\cf4 \strokec4 .\cf9 \strokec9 getFullYear\cf4 \strokec4 ()\cf7 \strokec7 \}\cf6 \strokec6 -W\cf7 \strokec7 $\{\cf5 \strokec5 week\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 function\cf4 \strokec4  \cf9 \strokec9 getTodayName\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 return\cf4 \strokec4  [\cf6 \strokec6 "Sunday"\cf4 \strokec4 ,\cf6 \strokec6 "Monday"\cf4 \strokec4 ,\cf6 \strokec6 "Tuesday"\cf4 \strokec4 ,\cf6 \strokec6 "Wednesday"\cf4 \strokec4 ,\cf6 \strokec6 "Thursday"\cf4 \strokec4 ,\cf6 \strokec6 "Friday"\cf4 \strokec4 ,\cf6 \strokec6 "Saturday"\cf4 \strokec4 ][\cf7 \strokec7 new\cf4 \strokec4  \cf10 \strokec10 Date\cf4 \strokec4 ().\cf9 \strokec9 getDay\cf4 \strokec4 ()];\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf7 \cb3 \strokec7 function\cf4 \strokec4  \cf9 \strokec9 Checklist\cf4 \strokec4 (\{ \cf5 \strokec5 kidKey\cf4 \strokec4 , \cf5 \strokec5 onBack\cf4 \strokec4  \}) \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 kid\cf4 \strokec4  = \cf5 \strokec5 kids\cf4 \strokec4 [\cf5 \strokec5 kidKey\cf4 \strokec4 ];\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 weekKey\cf4 \strokec4  = \cf9 \strokec9 getCurrentWeekKey\cf4 \strokec4 (\cf5 \strokec5 kidKey\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  [\cf8 \strokec8 checked\cf4 \strokec4 , \cf8 \strokec8 setChecked\cf4 \strokec4 ] = \cf9 \strokec9 useState\cf4 \strokec4 (\{\});\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  [\cf8 \strokec8 activeDay\cf4 \strokec4 , \cf8 \strokec8 setActiveDay\cf4 \strokec4 ] = \cf9 \strokec9 useState\cf4 \strokec4 (\cf9 \strokec9 getTodayName\cf4 \strokec4 ());\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  [\cf8 \strokec8 loaded\cf4 \strokec4 , \cf8 \strokec8 setLoaded\cf4 \strokec4 ] = \cf9 \strokec9 useState\cf4 \strokec4 (\cf7 \strokec7 false\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  [\cf8 \strokec8 savedToast\cf4 \strokec4 , \cf8 \strokec8 setSavedToast\cf4 \strokec4 ] = \cf9 \strokec9 useState\cf4 \strokec4 (\cf7 \strokec7 false\cf4 \strokec4 );\cb1 \
\
\cb3   \cf9 \strokec9 useEffect\cf4 \strokec4 (() \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \{\cb1 \
\cb3       \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 saved\cf4 \strokec4  = \cf5 \strokec5 localStorage\cf4 \strokec4 .\cf9 \strokec9 getItem\cf4 \strokec4 (\cf5 \strokec5 weekKey\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 saved\cf4 \strokec4 ) \cf9 \strokec9 setChecked\cf4 \strokec4 (\cf10 \strokec10 JSON\cf4 \strokec4 .\cf9 \strokec9 parse\cf4 \strokec4 (\cf5 \strokec5 saved\cf4 \strokec4 ));\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf4 \strokec4  (\cf5 \strokec5 e\cf4 \strokec4 ) \{\}\cb1 \
\cb3     \cf9 \strokec9 setLoaded\cf4 \strokec4 (\cf7 \strokec7 true\cf4 \strokec4 );\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf9 \strokec9 useEffect\cf4 \strokec4 (() \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 loaded\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \{\cb1 \
\cb3       \cf5 \strokec5 localStorage\cf4 \strokec4 .\cf9 \strokec9 setItem\cf4 \strokec4 (\cf5 \strokec5 weekKey\cf4 \strokec4 , \cf10 \strokec10 JSON\cf4 \strokec4 .\cf9 \strokec9 stringify\cf4 \strokec4 (\cf5 \strokec5 checked\cf4 \strokec4 ));\cb1 \
\cb3       \cf9 \strokec9 setSavedToast\cf4 \strokec4 (\cf7 \strokec7 true\cf4 \strokec4 );\cb1 \
\cb3       \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 t\cf4 \strokec4  = \cf9 \strokec9 setTimeout\cf4 \strokec4 (() \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setSavedToast\cf4 \strokec4 (\cf7 \strokec7 false\cf4 \strokec4 ), \cf11 \strokec11 1500\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 clearTimeout\cf4 \strokec4 (\cf5 \strokec5 t\cf4 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf4 \strokec4  (\cf5 \strokec5 e\cf4 \strokec4 ) \{\}\cb1 \
\cb3   \}, [\cf5 \strokec5 checked\cf4 \strokec4 ]);\cb1 \
\
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 currentTasks\cf4 \strokec4  = \cf9 \strokec9 getTasksForDay\cf4 \strokec4 (\cf5 \strokec5 activeDay\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 isWeekend\cf4 \strokec4  = \cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  || \cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Sunday"\cf4 \strokec4 ;\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf9 \strokec9 toggle\cf4 \strokec4  = (\cf5 \strokec5 taskId\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3     \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 key\cf4 \strokec4  = \cf6 \strokec6 `\cf7 \strokec7 $\{\cf5 \strokec5 activeDay\cf7 \strokec7 \}\cf6 \strokec6 -\cf7 \strokec7 $\{\cf5 \strokec5 taskId\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 ;\cb1 \
\cb3     \cf9 \strokec9 setChecked\cf4 \strokec4 ((\cf5 \strokec5 prev\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  (\{ ...\cf5 \strokec5 prev\cf4 \strokec4 , \cf5 \strokec5 [key]:\cf4 \strokec4  !\cf5 \strokec5 prev\cf4 \strokec4 [\cf5 \strokec5 key\cf4 \strokec4 ] \}));\cb1 \
\cb3   \};\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4  = (\cf5 \strokec5 taskId\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  !!\cf5 \strokec5 checked\cf4 \strokec4 [\cf6 \strokec6 `\cf7 \strokec7 $\{\cf5 \strokec5 activeDay\cf7 \strokec7 \}\cf6 \strokec6 -\cf7 \strokec7 $\{\cf5 \strokec5 taskId\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 ];\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 completedCount\cf4 \strokec4  = \cf5 \strokec5 currentTasks\cf4 \strokec4 .\cf9 \strokec9 filter\cf4 \strokec4 ((\cf5 \strokec5 t\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 t\cf4 \strokec4 .\cf5 \strokec5 id\cf4 \strokec4 )).\cf5 \strokec5 length\cf4 \strokec4 ;\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 progress\cf4 \strokec4  = \cf10 \strokec10 Math\cf4 \strokec4 .\cf9 \strokec9 round\cf4 \strokec4 ((\cf5 \strokec5 completedCount\cf4 \strokec4  / \cf5 \strokec5 currentTasks\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ) * \cf11 \strokec11 100\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 todaySpecial\cf4 \strokec4  = \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 specialActivities\cf4 \strokec4 .\cf9 \strokec9 find\cf4 \strokec4 ((\cf5 \strokec5 s\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 s\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4  === \cf5 \strokec5 activeDay\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 totalChecked\cf4 \strokec4  = \cf10 \strokec10 Object\cf4 \strokec4 .\cf9 \strokec9 values\cf4 \strokec4 (\cf5 \strokec5 checked\cf4 \strokec4 ).\cf9 \strokec9 filter\cf4 \strokec4 (\cf10 \strokec10 Boolean\cf4 \strokec4 ).\cf5 \strokec5 length\cf4 \strokec4 ;\cb1 \
\cb3   \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 stars\cf4 \strokec4  = \cf10 \strokec10 Math\cf4 \strokec4 .\cf9 \strokec9 floor\cf4 \strokec4 (\cf5 \strokec5 totalChecked\cf4 \strokec4  / \cf11 \strokec11 5\cf4 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 loaded\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3     \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 minHeight:\cf4 \strokec4  \cf6 \strokec6 "100vh"\cf4 \strokec4 , \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 justifyContent:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 40\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 emoji\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3     \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3     \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 minHeight:\cf4 \strokec4  \cf6 \strokec6 "100vh"\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 `linear-gradient(135deg, \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light\cf7 \strokec7 \}\cf6 \strokec6  0%, \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light2\cf7 \strokec7 \}\cf6 \strokec6  100%)`\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf7 \strokec7 \{\cf13 \strokec13 /* Saved toast */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3         \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "fixed"\cf4 \strokec4 , \cf5 \strokec5 top:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 right:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 zIndex:\cf4 \strokec4  \cf11 \strokec11 999\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "#22c55e"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "8px 14px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 4px 12px rgba(34,197,94,0.4)"\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 opacity:\cf4 \strokec4  \cf5 \strokec5 savedToast\cf4 \strokec4  ? \cf11 \strokec11 1\cf4 \strokec4  : \cf11 \strokec11 0\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 transform:\cf4 \strokec4  \cf5 \strokec5 savedToast\cf4 \strokec4  ? \cf6 \strokec6 "translateY(0)"\cf4 \strokec4  : \cf6 \strokec6 "translateY(-8px)"\cf4 \strokec4 ,\cb1 \
\cb3         \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.3s ease"\cf4 \strokec4 , \cf5 \strokec5 pointerEvents:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3       \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 \uc0\u10003  Saved!\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf7 \strokec7 \{\cf13 \strokec13 /* Header */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 gradient\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "32px 24px 24px"\cf4 \strokec4 , \cf5 \strokec5 textAlign:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "relative"\cf4 \strokec4 , \cf5 \strokec5 overflow:\cf4 \strokec4  \cf6 \strokec6 "hidden"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "absolute"\cf4 \strokec4 , \cf5 \strokec5 top:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 left:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 right:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 bottom:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 backgroundImage:\cf4 \strokec4  \cf6 \strokec6 "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf4 \strokec4  \cf12 \strokec12 />\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Back button */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 onBack\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3           \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "absolute"\cf4 \strokec4 , \cf5 \strokec5 top:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 left:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "rgba(255,255,255,0.2)"\cf4 \strokec4 , \cf5 \strokec5 border:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "6px 14px"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 ,\cb1 \
\cb3         \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 \uc0\u8592  Back\cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 40\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 4\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 emoji\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 h1\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 28\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 textShadow:\cf4 \strokec4  \cf6 \strokec6 "0 2px 8px rgba(0,0,0,0.2)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf7 \strokec7 \{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 name\cf7 \strokec7 \}\cf4 \strokec4 's Summer Checklist\cb1 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 h1\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 p\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "6px 0 0"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "rgba(255,255,255,0.85)"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           
\f1 \uc0\u11088 
\f0  \cf7 \strokec7 \{\cf5 \strokec5 stars\cf7 \strokec7 \}\cf4 \strokec4  star\cf7 \strokec7 \{\cf5 \strokec5 stars\cf4 \strokec4  !== \cf11 \strokec11 1\cf4 \strokec4  ? \cf6 \strokec6 "s"\cf4 \strokec4  : \cf6 \strokec6 ""\cf7 \strokec7 \}\cf4 \strokec4  earned \'b7 \cf7 \strokec7 \{\cf5 \strokec5 totalChecked\cf7 \strokec7 \}\cf4 \strokec4  tasks this week!\cb1 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 p\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf7 \strokec7 \{\cf13 \strokec13 /* Day Selector */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 overflowX:\cf4 \strokec4  \cf6 \strokec6 "auto"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "16px 16px 8px"\cf4 \strokec4 , \cf5 \strokec5 scrollbarWidth:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf5 \strokec5 days\cf4 \strokec4 .\cf9 \strokec9 map\cf4 \strokec4 ((\cf5 \strokec5 day\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3           \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 dayTasks\cf4 \strokec4  = \cf9 \strokec9 getTasksForDay\cf4 \strokec4 (\cf5 \strokec5 day\cf4 \strokec4 );\cb1 \
\cb3           \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 dayCount\cf4 \strokec4  = \cf5 \strokec5 dayTasks\cf4 \strokec4 .\cf9 \strokec9 filter\cf4 \strokec4 ((\cf5 \strokec5 t\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  !!\cf5 \strokec5 checked\cf4 \strokec4 [\cf6 \strokec6 `\cf7 \strokec7 $\{\cf5 \strokec5 day\cf7 \strokec7 \}\cf6 \strokec6 -\cf7 \strokec7 $\{\cf5 \strokec5 t\cf4 \strokec4 .\cf5 \strokec5 id\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 ]).\cf5 \strokec5 length\cf4 \strokec4 ;\cb1 \
\cb3           \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 isActive\cf4 \strokec4  = \cf5 \strokec5 day\cf4 \strokec4  === \cf5 \strokec5 activeDay\cf4 \strokec4 ;\cb1 \
\cb3           \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 isWknd\cf4 \strokec4  = \cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  || \cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Sunday"\cf4 \strokec4 ;\cb1 \
\cb3           \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 isToday\cf4 \strokec4  = \cf5 \strokec5 day\cf4 \strokec4  === \cf9 \strokec9 getTodayName\cf4 \strokec4 ();\cb1 \
\cb3           \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 key\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 day\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setActiveDay\cf4 \strokec4 (\cf5 \strokec5 day\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3               \cf5 \strokec5 flexShrink:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "10px 16px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 border:\cf4 \strokec4  \cf5 \strokec5 isToday\cf4 \strokec4  && !\cf5 \strokec5 isActive\cf4 \strokec4  ? \cf6 \strokec6 `2px solid \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4  : \cf6 \strokec6 "2px solid transparent"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf5 \strokec5 isActive\cf4 \strokec4  ? \cf6 \strokec6 "bold"\cf4 \strokec4  : \cf6 \strokec6 "normal"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 isActive\cf4 \strokec4  ? (\cf5 \strokec5 isWknd\cf4 \strokec4  ? \cf6 \strokec6 "linear-gradient(135deg, #fb923c, #f59e0b)"\cf4 \strokec4  : \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 gradient\cf4 \strokec4 ) : \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 isActive\cf4 \strokec4  ? \cf6 \strokec6 "white"\cf4 \strokec4  : \cf6 \strokec6 "#888"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf5 \strokec5 isActive\cf4 \strokec4  ? \cf6 \strokec6 `0 4px 12px rgba(0,0,0,0.2)`\cf4 \strokec4  : \cf6 \strokec6 "0 2px 6px rgba(0,0,0,0.08)"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s ease"\cf4 \strokec4 , \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "relative"\cf4 \strokec4 ,\cb1 \
\cb3             \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf5 \strokec5 day\cf4 \strokec4 .\cf9 \strokec9 slice\cf4 \strokec4 (\cf11 \strokec11 0\cf4 \strokec4 , \cf11 \strokec11 3\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf5 \strokec5 isToday\cf4 \strokec4  && \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 isActive\cf4 \strokec4  ? \cf6 \strokec6 "rgba(255,255,255,0.8)"\cf4 \strokec4  : \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf4 \strokec4 , \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 1\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 TODAY\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf5 \strokec5 dayCount\cf4 \strokec4  > \cf11 \strokec11 0\cf4 \strokec4  && (\cb1 \
\cb3                 \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3                   \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "absolute"\cf4 \strokec4 , \cf5 \strokec5 top:\cf4 \strokec4  -\cf11 \strokec11 4\cf4 \strokec4 , \cf5 \strokec5 right:\cf4 \strokec4  -\cf11 \strokec11 4\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "#f59e0b"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf6 \strokec6 "50%"\cf4 \strokec4 , \cf5 \strokec5 width:\cf4 \strokec4  \cf11 \strokec11 18\cf4 \strokec4 , \cf5 \strokec5 height:\cf4 \strokec4  \cf11 \strokec11 18\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 10\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 justifyContent:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 ,\cb1 \
\cb3                 \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 dayCount\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           );\cb1 \
\cb3         \})\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "8px 16px 24px"\cf4 \strokec4 , \cf5 \strokec5 maxWidth:\cf4 \strokec4  \cf11 \strokec11 480\cf4 \strokec4 , \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "0 auto"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Special Activity Banner */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf5 \strokec5 todaySpecial\cf4 \strokec4  && (\cb1 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3             \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 isWeekend\cf4 \strokec4  ? \cf6 \strokec6 "linear-gradient(135deg, #fed7aa, #fde68a)"\cf4 \strokec4  : \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 bannerBg\cf4 \strokec4 ,\cb1 \
\cb3             \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "14px 18px"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 ,\cb1 \
\cb3             \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 ,\cb1 \
\cb3             \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 2px 8px rgba(0,0,0,0.08)"\cf4 \strokec4 ,\cb1 \
\cb3           \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 28\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 todaySpecial\cf4 \strokec4 .\cf5 \strokec5 emoji\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 11\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 isWeekend\cf4 \strokec4  ? \cf6 \strokec6 "#92400e"\cf4 \strokec4  : \cf6 \strokec6 "#1e3a5f"\cf4 \strokec4 , \cf5 \strokec5 textTransform:\cf4 \strokec4  \cf6 \strokec6 "uppercase"\cf4 \strokec4 , \cf5 \strokec5 letterSpacing:\cf4 \strokec4  \cf11 \strokec11 1\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                 \cf7 \strokec7 \{\cf5 \strokec5 isWeekend\cf4 \strokec4  ? \cf6 \strokec6 "Weekend Vibes 
\f1 \uc0\u10024 
\f0 "\cf4 \strokec4  : \cf6 \strokec6 "Today's Special"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 15\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 isWeekend\cf4 \strokec4  ? \cf6 \strokec6 "#78350f"\cf4 \strokec4  : \cf6 \strokec6 "#333"\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 todaySpecial\cf4 \strokec4 .\cf5 \strokec5 activity\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Weekend card OR progress bar */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf5 \strokec5 isWeekend\cf4 \strokec4  ? (\cb1 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "32px 24px"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 2px 8px rgba(0,0,0,0.07)"\cf4 \strokec4 , \cf5 \strokec5 textAlign:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 60\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  ? \cf6 \strokec6 "
\f1 \uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 
\f0 "\cf4 \strokec4  : \cf6 \strokec6 "
\f1 \uc0\u55356 \u57151 
\f0 "\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 h2\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "0 0 8px"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 22\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  ? \cf6 \strokec6 "#ea580c"\cf4 \strokec4  : \cf6 \strokec6 "#16a34a"\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  ? \cf6 \strokec6 "Family Day!"\cf4 \strokec4  : \cf6 \strokec6 "Rest Day!"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 h2\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 p\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#888"\cf4 \strokec4 , \cf5 \strokec5 fontStyle:\cf4 \strokec4  \cf6 \strokec6 "italic"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  ? \cf6 \strokec6 "Enjoy quality time with the whole family 
\f1 \uc0\u55357 \u56475 
\f0 "\cf4 \strokec4  : \cf6 \strokec6 "Recharge and get ready for an amazing week ahead 
\f1 \uc0\u55356 \u57119 
\f0 "\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 p\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 toggle\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3               \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 24\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "16px 32px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 50\cf4 \strokec4 , \cf5 \strokec5 border:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 background:\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 ) ? \cf6 \strokec6 "linear-gradient(135deg, #fb923c, #f59e0b)"\cf4 \strokec4  : \cf6 \strokec6 "#f3f4f6"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 color:\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 ) ? \cf6 \strokec6 "white"\cf4 \strokec4  : \cf6 \strokec6 "#888"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 ) ? \cf6 \strokec6 "0 4px 16px rgba(251,146,60,0.4)"\cf4 \strokec4  : \cf6 \strokec6 "0 2px 6px rgba(0,0,0,0.08)"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.3s ease"\cf4 \strokec4 ,\cb1 \
\cb3               \cf5 \strokec5 transform:\cf4 \strokec4  \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 ) ? \cf6 \strokec6 "scale(1.05)"\cf4 \strokec4  : \cf6 \strokec6 "scale(1)"\cf4 \strokec4 ,\cb1 \
\cb3             \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf7 \strokec7 \{\cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 currentTasks\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ].\cf5 \strokec5 id\cf4 \strokec4 ) ? \cf6 \strokec6 "\uc0\u10003  Done! Have a great day!"\cf4 \strokec4  : \cf5 \strokec5 activeDay\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  ? \cf6 \strokec6 "Tap when enjoying Family Day 
\f1 \uc0\u55356 \u57144 
\f0 "\cf4 \strokec4  : \cf6 \strokec6 "Tap when rested 
\f1 \uc0\u55356 \u57151 
\f0 "\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         ) : (\cb1 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "16px 18px"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 2px 8px rgba(0,0,0,0.07)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 justifyContent:\cf4 \strokec4  \cf6 \strokec6 "space-between"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#888"\cf4 \strokec4 , \cf5 \strokec5 fontStyle:\cf4 \strokec4  \cf6 \strokec6 "italic"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 activeDay\cf7 \strokec7 \}\cf4 \strokec4 's progress\cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 completedCount\cf7 \strokec7 \}\cf4 \strokec4 /\cf7 \strokec7 \{\cf5 \strokec5 currentTasks\cf4 \strokec4 .\cf5 \strokec5 length\cf7 \strokec7 \}\cf4 \strokec4  \uc0\u10003 \cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 progressBg\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 999\cf4 \strokec4 , \cf5 \strokec5 height:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 , \cf5 \strokec5 overflow:\cf4 \strokec4  \cf6 \strokec6 "hidden"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 height:\cf4 \strokec4  \cf6 \strokec6 "100%"\cf4 \strokec4 , \cf5 \strokec5 width:\cf4 \strokec4  \cf6 \strokec6 `\cf7 \strokec7 $\{\cf5 \strokec5 progress\cf7 \strokec7 \}\cf6 \strokec6 %`\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 progressFill\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 999\cf4 \strokec4 , \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "width 0.5s ease"\cf4 \strokec4 , \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "relative"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                 \cf7 \strokec7 \{\cf5 \strokec5 progress\cf4 \strokec4  > \cf11 \strokec11 10\cf4 \strokec4  && \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 position:\cf4 \strokec4  \cf6 \strokec6 "absolute"\cf4 \strokec4 , \cf5 \strokec5 right:\cf4 \strokec4  \cf11 \strokec11 6\cf4 \strokec4 , \cf5 \strokec5 top:\cf4 \strokec4  \cf6 \strokec6 "50%"\cf4 \strokec4 , \cf5 \strokec5 transform:\cf4 \strokec4  \cf6 \strokec6 "translateY(-50%)"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u10024 
\f0 \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3               \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf7 \strokec7 \{\cf5 \strokec5 progress\cf4 \strokec4  === \cf11 \strokec11 100\cf4 \strokec4  && (\cb1 \
\cb3               \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 textAlign:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent2\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 celebrate\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Task List */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf4 \strokec4 !\cf5 \strokec5 isWeekend\cf4 \strokec4  && (\cb1 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 flexDirection:\cf4 \strokec4  \cf6 \strokec6 "column"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf7 \strokec7 \{\cf5 \strokec5 currentTasks\cf4 \strokec4 .\cf9 \strokec9 map\cf4 \strokec4 ((\cf5 \strokec5 task\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3               \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 done\cf4 \strokec4  = \cf9 \strokec9 isChecked\cf4 \strokec4 (\cf5 \strokec5 task\cf4 \strokec4 .\cf5 \strokec5 id\cf4 \strokec4 );\cb1 \
\cb3               \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3                 \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 key\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 task\cf4 \strokec4 .\cf5 \strokec5 id\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 toggle\cf4 \strokec4 (\cf5 \strokec5 task\cf4 \strokec4 .\cf5 \strokec5 id\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3                   \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "14px 18px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 border:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 `2px solid \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4  : \cf6 \strokec6 "2px solid transparent"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 `linear-gradient(135deg, \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light\cf7 \strokec7 \}\cf6 \strokec6 , \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light2\cf7 \strokec7 \}\cf6 \strokec6 )`\cf4 \strokec4  : \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 textAlign:\cf4 \strokec4  \cf6 \strokec6 "left"\cf4 \strokec4 , \cf5 \strokec5 width:\cf4 \strokec4  \cf6 \strokec6 "100%"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 `0 2px 10px rgba(0,0,0,0.1)`\cf4 \strokec4  : \cf6 \strokec6 "0 2px 6px rgba(0,0,0,0.07)"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s ease"\cf4 \strokec4 , \cf5 \strokec5 transform:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 "scale(1.01)"\cf4 \strokec4  : \cf6 \strokec6 "scale(1)"\cf4 \strokec4 ,\cb1 \
\cb3                 \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 22\cf4 \strokec4 , \cf5 \strokec5 flexShrink:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 task\cf4 \strokec4 .\cf5 \strokec5 emoji\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 flex:\cf4 \strokec4  \cf11 \strokec11 1\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 "#888"\cf4 \strokec4  : \cf6 \strokec6 "#333"\cf4 \strokec4 , \cf5 \strokec5 textDecoration:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 "line-through"\cf4 \strokec4  : \cf6 \strokec6 "none"\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 , \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                     \cf7 \strokec7 \{\cf5 \strokec5 task\cf4 \strokec4 .\cf5 \strokec5 label\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3                     \cf5 \strokec5 width:\cf4 \strokec4  \cf11 \strokec11 26\cf4 \strokec4 , \cf5 \strokec5 height:\cf4 \strokec4  \cf11 \strokec11 26\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf6 \strokec6 "50%"\cf4 \strokec4 ,\cb1 \
\cb3                     \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 gradient\cf4 \strokec4  : \cf6 \strokec6 "#f0f0f0"\cf4 \strokec4 ,\cb1 \
\cb3                     \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 justifyContent:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 flexShrink:\cf4 \strokec4  \cf11 \strokec11 0\cf4 \strokec4 ,\cb1 \
\cb3                     \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s"\cf4 \strokec4 , \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf5 \strokec5 done\cf4 \strokec4  ? \cf6 \strokec6 `0 2px 8px rgba(0,0,0,0.2)`\cf4 \strokec4  : \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3                   \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                     \cf7 \strokec7 \{\cf5 \strokec5 done\cf4 \strokec4  && \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 \uc0\u10003 \cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                 \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               );\cb1 \
\cb3             \})\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         )\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Weekly Special Activities */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 24\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "18px"\cf4 \strokec4 , \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 2px 8px rgba(0,0,0,0.07)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 h3\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "0 0 14px"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 15\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 letterSpacing:\cf4 \strokec4  \cf11 \strokec11 0.5\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             
\f1 \uc0\u55357 \u56787 \u65039 
\f0  Weekly Special Activities\cb1 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 h3\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 flexDirection:\cf4 \strokec4  \cf6 \strokec6 "column"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             \cf7 \strokec7 \{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 specialActivities\cf4 \strokec4 .\cf9 \strokec9 map\cf4 \strokec4 ((\cf5 \strokec5 item\cf4 \strokec4 ) \cf7 \strokec7 =>\cf4 \strokec4  \{\cb1 \
\cb3               \cf7 \strokec7 const\cf4 \strokec4  \cf8 \strokec8 wknd\cf4 \strokec4  = \cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Saturday"\cf4 \strokec4  || \cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4  === \cf6 \strokec6 "Sunday"\cf4 \strokec4 ;\cb1 \
\cb3               \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3                 \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 key\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setActiveDay\cf4 \strokec4 (\cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3                   \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "10px 14px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 background:\cf4 \strokec4  \cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4  === \cf5 \strokec5 activeDay\cf4 \strokec4  ? (\cf5 \strokec5 wknd\cf4 \strokec4  ? \cf6 \strokec6 "linear-gradient(135deg, #fff7ed, #fef3c7)"\cf4 \strokec4  : \cf6 \strokec6 `linear-gradient(135deg, \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light\cf7 \strokec7 \}\cf6 \strokec6 , \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light2\cf7 \strokec7 \}\cf6 \strokec6 )`\cf4 \strokec4 ) : \cf6 \strokec6 "#fafafa"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 border:\cf4 \strokec4  \cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf4 \strokec4  === \cf5 \strokec5 activeDay\cf4 \strokec4  ? (\cf5 \strokec5 wknd\cf4 \strokec4  ? \cf6 \strokec6 "1.5px solid #fb923c"\cf4 \strokec4  : \cf6 \strokec6 `1.5px solid \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 ) : \cf6 \strokec6 "1.5px solid transparent"\cf4 \strokec4 ,\cb1 \
\cb3                   \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s"\cf4 \strokec4 ,\cb1 \
\cb3                 \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 <\cf7 \strokec7 span\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 emoji\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 span\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 <\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                     \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 11\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 wknd\cf4 \strokec4  ? \cf6 \strokec6 "#ea580c"\cf4 \strokec4  : \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf4 \strokec4 , \cf5 \strokec5 textTransform:\cf4 \strokec4  \cf6 \strokec6 "uppercase"\cf4 \strokec4 , \cf5 \strokec5 letterSpacing:\cf4 \strokec4  \cf11 \strokec11 0.5\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                       \cf7 \strokec7 \{\cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 day\cf7 \strokec7 \}\cf4 \strokec4  \cf7 \strokec7 \{\cf5 \strokec5 wknd\cf4 \strokec4  ? \cf6 \strokec6 "
\f1 \uc0\u55356 \u57093 
\f0 "\cf4 \strokec4  : \cf6 \strokec6 ""\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                     \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#555"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf7 \strokec7 \{\cf5 \strokec5 item\cf4 \strokec4 .\cf5 \strokec5 activity\cf7 \strokec7 \}\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                   \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3                 \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3               );\cb1 \
\cb3             \})\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "10px 14px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 12\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "#e0f2fe"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#0369a1"\cf4 \strokec4 , \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3             
\f1 \uc0\u55356 \u57290 
\f0  \cf12 \strokec12 <\cf7 \strokec7 strong\cf12 \strokec12 >\cf4 \strokec4 Goal:\cf12 \strokec12 </\cf7 \strokec7 strong\cf12 \strokec12 >\cf4 \strokec4  Pool 3 evenings per week\cb1 \
\cb3           \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \{ \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 window\cf4 \strokec4 .\cf9 \strokec9 confirm\cf4 \strokec4 (\cf6 \strokec6 "Reset all this week's progress?"\cf4 \strokec4 )) \{ \cf9 \strokec9 setChecked\cf4 \strokec4 (\{\}); \cf5 \strokec5 localStorage\cf4 \strokec4 .\cf9 \strokec9 removeItem\cf4 \strokec4 (\cf5 \strokec5 weekKey\cf4 \strokec4 ); \}\}\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3           \cf5 \strokec5 marginTop:\cf4 \strokec4  \cf11 \strokec11 16\cf4 \strokec4 , \cf5 \strokec5 width:\cf4 \strokec4  \cf6 \strokec6 "100%"\cf4 \strokec4 , \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "12px"\cf4 \strokec4 , \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 14\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 border:\cf4 \strokec4  \cf6 \strokec6 `1.5px solid \cf7 \strokec7 $\{\cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 light2\cf7 \strokec7 \}\cf6 \strokec6 `\cf4 \strokec4 , \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 color:\cf4 \strokec4  \cf5 \strokec5 kid\cf4 \strokec4 .\cf5 \strokec5 accent\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 , \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 ,\cb1 \
\cb3         \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           
\f1 \uc0\u55357 \u56580 
\f0  Reset this week's progress\cb1 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3     \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf7 \strokec7 function\cf4 \strokec4  \cf9 \strokec9 App\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 const\cf4 \strokec4  [\cf8 \strokec8 activeKid\cf4 \strokec4 , \cf8 \strokec8 setActiveKid\cf4 \strokec4 ] = \cf9 \strokec9 useState\cf4 \strokec4 (\cf7 \strokec7 null\cf4 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 activeKid\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4  \cf12 \strokec12 <\cf10 \strokec10 Checklist\cf4 \strokec4  \cf5 \strokec5 kidKey\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 activeKid\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 onBack\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setActiveKid\cf4 \strokec4 (\cf7 \strokec7 null\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf12 \strokec12 />\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  (\cb1 \
\cb3     \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3       \cf5 \strokec5 minHeight:\cf4 \strokec4  \cf6 \strokec6 "100vh"\cf4 \strokec4 ,\cb1 \
\cb3       \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #fdf6f0 0%, #fce8f3 50%, #eff6ff 100%)"\cf4 \strokec4 ,\cb1 \
\cb3       \cf5 \strokec5 fontFamily:\cf4 \strokec4  \cf6 \strokec6 "Georgia, serif"\cf4 \strokec4 ,\cb1 \
\cb3       \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 flexDirection:\cf4 \strokec4  \cf6 \strokec6 "column"\cf4 \strokec4 , \cf5 \strokec5 alignItems:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 , \cf5 \strokec5 justifyContent:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4 ,\cb1 \
\cb3       \cf5 \strokec5 padding:\cf4 \strokec4  \cf11 \strokec11 24\cf4 \strokec4 ,\cb1 \
\cb3     \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 48\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u9728 \u65039 
\f0 \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 h1\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "0 0 4px"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 26\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#333"\cf4 \strokec4 , \cf5 \strokec5 textAlign:\cf4 \strokec4  \cf6 \strokec6 "center"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         Summer Checklist\cb1 \
\cb3       \cf12 \strokec12 </\cf7 \strokec7 h1\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 <\cf7 \strokec7 p\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 margin:\cf4 \strokec4  \cf6 \strokec6 "0 0 48px"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "#888"\cf4 \strokec4 , \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 15\cf4 \strokec4 , \cf5 \strokec5 fontStyle:\cf4 \strokec4  \cf6 \strokec6 "italic"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 Who's checking in today?\cf12 \strokec12 </\cf7 \strokec7 p\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 display:\cf4 \strokec4  \cf6 \strokec6 "flex"\cf4 \strokec4 , \cf5 \strokec5 flexDirection:\cf4 \strokec4  \cf6 \strokec6 "column"\cf4 \strokec4 , \cf5 \strokec5 gap:\cf4 \strokec4  \cf11 \strokec11 20\cf4 \strokec4 , \cf5 \strokec5 width:\cf4 \strokec4  \cf6 \strokec6 "100%"\cf4 \strokec4 , \cf5 \strokec5 maxWidth:\cf4 \strokec4  \cf11 \strokec11 320\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Sana */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setActiveKid\cf4 \strokec4 (\cf6 \strokec6 "sana"\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3           \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "28px 24px"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 24\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 border:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #c9748f, #a855b5)"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 8px 24px rgba(201,116,143,0.4)"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s ease"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 transform:\cf4 \strokec4  \cf6 \strokec6 "scale(1)"\cf4 \strokec4 ,\cb1 \
\cb3         \}\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 onMouseEnter\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 e\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 e\cf4 \strokec4 .\cf5 \strokec5 currentTarget\cf4 \strokec4 .\cf5 \strokec5 style\cf4 \strokec4 .\cf5 \strokec5 transform\cf4 \strokec4  = \cf6 \strokec6 "scale(1.03)"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 onMouseLeave\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 e\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 e\cf4 \strokec4 .\cf5 \strokec5 currentTarget\cf4 \strokec4 .\cf5 \strokec5 style\cf4 \strokec4 .\cf5 \strokec5 transform\cf4 \strokec4  = \cf6 \strokec6 "scale(1)"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 48\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u55357 \u56423 
\f0 \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 22\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 4\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 Sana\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "rgba(255,255,255,0.8)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u55356 \u57144 
\f0  Jiu Jitsu \'b7 Crafting \'b7 Library\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf7 \strokec7 \{\cf13 \strokec13 /* Zayd */\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 <\cf7 \strokec7 button\cf4 \strokec4  \cf5 \strokec5 onClick\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 () \cf7 \strokec7 =>\cf4 \strokec4  \cf9 \strokec9 setActiveKid\cf4 \strokec4 (\cf6 \strokec6 "zayd"\cf4 \strokec4 )\cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{\cb1 \
\cb3           \cf5 \strokec5 padding:\cf4 \strokec4  \cf6 \strokec6 "28px 24px"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 borderRadius:\cf4 \strokec4  \cf11 \strokec11 24\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 border:\cf4 \strokec4  \cf6 \strokec6 "none"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 cursor:\cf4 \strokec4  \cf6 \strokec6 "pointer"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 background:\cf4 \strokec4  \cf6 \strokec6 "linear-gradient(135deg, #3b82f6, #059669)"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 boxShadow:\cf4 \strokec4  \cf6 \strokec6 "0 8px 24px rgba(59,130,246,0.4)"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 transition:\cf4 \strokec4  \cf6 \strokec6 "all 0.2s ease"\cf4 \strokec4 ,\cb1 \
\cb3           \cf5 \strokec5 transform:\cf4 \strokec4  \cf6 \strokec6 "scale(1)"\cf4 \strokec4 ,\cb1 \
\cb3         \}\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 onMouseEnter\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 e\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 e\cf4 \strokec4 .\cf5 \strokec5 currentTarget\cf4 \strokec4 .\cf5 \strokec5 style\cf4 \strokec4 .\cf5 \strokec5 transform\cf4 \strokec4  = \cf6 \strokec6 "scale(1.03)"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 onMouseLeave\cf4 \strokec4 =\cf7 \strokec7 \{\cf5 \strokec5 e\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 e\cf4 \strokec4 .\cf5 \strokec5 currentTarget\cf4 \strokec4 .\cf5 \strokec5 style\cf4 \strokec4 .\cf5 \strokec5 transform\cf4 \strokec4  = \cf6 \strokec6 "scale(1)"\cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 48\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 8\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u55357 \u56422 
\f0 \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 22\cf4 \strokec4 , \cf5 \strokec5 fontWeight:\cf4 \strokec4  \cf6 \strokec6 "bold"\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "white"\cf4 \strokec4 , \cf5 \strokec5 marginBottom:\cf4 \strokec4  \cf11 \strokec11 4\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >\cf4 \strokec4 Zayd\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3           \cf12 \strokec12 <\cf7 \strokec7 div\cf4 \strokec4  \cf5 \strokec5 style\cf4 \strokec4 =\cf7 \strokec7 \{\cf4 \strokec4 \{ \cf5 \strokec5 fontSize:\cf4 \strokec4  \cf11 \strokec11 13\cf4 \strokec4 , \cf5 \strokec5 color:\cf4 \strokec4  \cf6 \strokec6 "rgba(255,255,255,0.8)"\cf4 \strokec4  \}\cf7 \strokec7 \}\cf12 \strokec12 >
\f1 \cf4 \strokec4 \uc0\u55356 \u57280 
\f0  Basketball \'b7 Crafting \'b7 Library\cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3         \cf12 \strokec12 </\cf7 \strokec7 button\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3       \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3     \cf12 \strokec12 </\cf7 \strokec7 div\cf12 \strokec12 >\cf4 \cb1 \strokec4 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}
