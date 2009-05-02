<?xml version="1.0" encoding="UTF-8"?>
<tagger name="Nepali">
  <tagset>
    <def-label name="NOMF">
      <tags-item tags="cat:cat:n.gen:f"/>   <!-- probably broken -->
      <tags-item tags="cat:n.f.*"/>
    </def-label>
    <def-label name="NOMM">
      <tags-item tags="cat:n.gen:m"/>   <!-- probably broken -->
      <tags-item tags="cat:n.m.*"/>
    </def-label>
    <def-label name="NOMANY">
      <tags-item tags="cat:n.gen:any"/>  <!-- probably broken -->
      <tags-item tags="cat:n.gen:any.*"/>
    </def-label>

    <def-label name="PROPN">
      <tags-item tags="cat:pn.*"/>
    </def-label>

    <def-label name="NUM">
      <tags-item tags="num"/>
      <tags-item tags="num.*"/>
    </def-label>

    <def-label name="DET">
      <tags-item tags="det.*"/>
    </def-label>

    <def-label name="DETDEM">
      <tags-item tags="det.dem.*"/>
    </def-label>
   
    <def-label name="PRNPERS">
      <tags-item tags="cat:prn.per:p1.*"/>
      <tags-item tags="cat:prn.per:p2.*"/>
      <tags-item tags="cat:prn.per:p3.*"/>
    </def-label>

    <def-label name="ADJ">
      <tags-item tags="cat:adj.*"/>
    </def-label>

    <def-label name="ADV">
      <tags-item tags="cat:adv"/>
    </def-label>

    <def-label name="PREP">
      <tags-item tags="cat:pr"/>
    </def-label>

    <def-label name="CNJSUB">
      <tags-item tags="cat:cnjsub"/>
    </def-label>

    <def-label name="CNJCOO">
      <tags-item tags="cat:cnjcoo"/>
    </def-label>

    <def-label name="VBSER">
      <tags-item tags="cat:vbser.*"/>
    </def-label>

    <def-label name="VBLEX">
      <tags-item tags="cat:v"/>   <!-- entries like this are probably broken -->
      <tags-item tags="cat:v.*"/>
    </def-label>

    <def-label name="VBLEXINF">
      <tags-item tags="cat:v.inf"/>
    </def-label>

  </tagset>

  <forbid>
    <label-sequence>
      <label-item label="CNJSUB"/> 
      <label-item label="CNJSUB"/>
    </label-sequence>
  </forbid>

</tagger>

