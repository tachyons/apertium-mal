<?xml version="1.0" encoding="UTF-8"?>
<tagger name="afrikaans">
<tagset>

  <def-label name="DEURNOM" closed="true">
    <tags-item lemma="deur" tags="n.*"/>
  </def-label> 
  <def-label name="NA" closed="true">
    <tags-item lemma="na" tags="pr"/>
  </def-label> 
  <def-label name="OMTE" closed="true">
    <tags-item lemma="om te" tags="pr"/>
  </def-label> 
  <def-label name="DEUR" closed="true">
    <tags-item lemma="deur" tags="pr"/>
  </def-label> 
  <def-label name="VIR" closed="true">
    <tags-item lemma="vir" tags="pr"/>
  </def-label> 

  <def-label name="ATP" closed="true">
    <tags-item tags="pr.atp"/>
  </def-label>
  <def-label name="GE" closed="true">
    <tags-item lemma="ge" tags="pref.past"/>
  </def-label>
  <def-label name="NIE" closed="true">
    <tags-item lemma="nie" tags="adv"/>
  </def-label>
  <def-label name="INTNOM" closed="true">
    <tags-item tags="prn.itg.*"/>
  </def-label> 
  <def-label name="INTADV" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>
  <def-label name="PREADV" closed="true">
    <tags-item tags="preadv"/>
  </def-label>
  <def-label name="ADV">
    <tags-item tags="adv"/>
  </def-label> 
  <def-label name="ADJ">
    <tags-item tags="adj"/>
    <tags-item tags="adj.pred"/>
    <tags-item tags="adj.attr"/>
    <tags-item tags="adj.comp"/>
    <tags-item tags="adj.sup"/>
    <tags-item tags="adj.sint"/>
    <tags-item tags="adj.sint.pred"/>
    <tags-item tags="adj.sint.attr"/>
    <tags-item tags="adj.sint.comp"/>
    <tags-item tags="adj.sint.sup"/>
  </def-label>
  <def-label name="ADJPOS" closed="true">
    <tags-item tags="adj.pos"/>
    <tags-item tags="adj.pos.*"/>
  </def-label>
  <def-label name="CNJSUBS" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  <def-label name="CNJCOORD" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>
  <def-label name="CNJADV">
    <tags-item tags="cnjadv"/>
  </def-label>
  <def-label name="DET" closed="true">
    <tags-item tags="det.dem.*"/>
    <tags-item tags="det.ind.*"/>
    <tags-item tags="det.def.*"/>
    <tags-item tags="det.pos.*"/>
    <tags-item tags="det.itg.*"/>
  </def-label>
  <def-label name="DETQNT_ORD" closed="true"><!--Poden anar precedits dels altres tipus de determinant -->
    <tags-item tags="det.qnt.*"/>
    <tags-item tags="det.ord.*"/>
  </def-label> 

  <def-label name="NUM" closed="true">
    <tags-item tags="num.*"/>
    <tags-item tags="num"/>
  </def-label>
  <def-label name="NOMSG">
    <tags-item tags="n.sg"/>
    <tags-item tags="n.acr.sg"/>
    <tags-item tags="n.unc.sg"/>
  </def-label>
  <def-label name="NOMPL">
    <tags-item tags="n.pl"/>
    <tags-item tags="n.acr.pl"/>
    <tags-item tags="n.unc.pl"/>
  </def-label>
  <def-label name="INTERJ">
    <tags-item tags="ij"/>
  </def-label>
  <def-label name="ORGANISASIE">
    <tags-item tags="np.org.*"/>
  </def-label>
  <def-label name="ANTROPONIM">
    <tags-item tags="np.ant.*"/>
  </def-label>
  <def-label name="PERSONA">
    <tags-item tags="np.per.*"/>
  </def-label>
  <def-label name="TOPONIM">
    <tags-item tags="np.loc.*"/>
  </def-label>
  <def-label name="NPALTRES">
    <tags-item tags="np.al.*"/>
  </def-label>
  <def-label name="PREDET" closed="true">
    <tags-item tags="predet.*"/>
  </def-label>
  <def-label name="PREP" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  <def-label name="PRNSUBJ" closed="true">
    <tags-item tags="prn.subj.*"/>
  </def-label>
  <def-label name="PRNOBJ" closed="true">
    <tags-item tags="prn.obj.*"/>
  </def-label>
  <def-label name="PRNALTRES" closed="true">
    <tags-item tags="prn.*"/>
  </def-label>
   <def-label name="VLEXPP">
    <tags-item tags="vblex.pp"/>
    <tags-item tags="vblex.sep.pp"/>
  </def-label>
  <def-label name="VSERPP" closed="true">
    <tags-item tags="vbser.pp"/>
  </def-label>
  <def-label name="VMODPP" closed="true">
    <tags-item tags="vbmod.pp"/>
  </def-label>
  <def-label name="VHAVEPP" closed="true">
    <tags-item tags="vbhaver.pp"/>
  </def-label><!--Aquest té sentit? l'auxiliar no té forma 'pp' no? -->


  <def-label name="PAST">
    <tags-item tags="vblex.past"/>
    <tags-item tags="vblex.sep.past"/>
    <tags-item tags="vbser.past"/>
    <tags-item tags="vbser.past.*"/>
  </def-label>
   <def-label name="VHAVEPAST" closed="true">
    <tags-item tags="vbhaver.past"/>
  </def-label>
   <def-label name="VMODPAST" closed="true">
    <tags-item tags="vbmod.past"/>
  </def-label>

  <def-label name="INF">
    <tags-item tags="vblex.inf"/>
    <tags-item tags="vblex.sep.inf"/>
    <tags-item tags="vbser.inf"/>
  </def-label>
  <def-label name="VHAVEINF" closed="true">
    <tags-item tags="vbhaver.inf"/>
  </def-label>
   <def-label name="VMODINF" closed="true">
    <tags-item tags="vbmod.inf"/>
  </def-label>
 <def-label name="PRES">
    <tags-item tags="vblex.pres"/>
    <tags-item tags="vblex.sep.pres"/>
    <tags-item tags="vbser.pres"/>
    <tags-item tags="vblex.pri.*"/>
    <tags-item tags="vblex.sep.pri.*"/>
    <tags-item tags="vbser.pri.*"/>
  </def-label>
  <def-label name="VHAVEPRES" closed="true">
    <tags-item tags="vbhaver.pres"/>
    <tags-item tags="vbhaver.pri.*"/>
  </def-label>
   <def-label name="VMODPRES" closed="true">
    <tags-item tags="vbmod.pres"/>
    <tags-item tags="vbmod.pri.*"/>
  </def-label>

  <def-label name="VAUX" closed="true">
    <tags-item tags="vaux.inf"/>
    <tags-item tags="vaux.pres"/>
    <tags-item tags="vaux.past"/>
 <!-- <tags-item tags="vbdo.pres"/>
    <tags-item tags="vbdo.pri.*"/>
    <tags-item tags="vbdo.past"/>  -->
  </def-label>

 <def-label name="VDO" closed="true">
    <tags-item tags="vbdo.pres"/>
    <tags-item tags="vbdo.pri.*"/>
    <tags-item tags="vbdo.past"/>
  </def-label>

  <def-label name="VLEX">
    <tags-item tags="vblex.*"/>
  </def-label>
  <def-label name="VHAVE" closed="true">
    <tags-item tags="vbhaver.*"/>
  </def-label>
  <def-label name="VSER" closed="true">
    <tags-item tags="vbser.*"/>
  </def-label>
  <def-label name="RELAN" closed="true">
    <tags-item tags="rel.an.*"/>
  </def-label>
  <def-label name="RELNN" closed="true">
    <tags-item tags="rel.nn.*"/>
  </def-label>
  <def-label name="RELADV" closed="true">
    <tags-item tags="rel.adv"/>
  </def-label>
  <def-label name="GEN" closed="true">
    <tags-item tags="gen"/>
  </def-label>
 <def-label name="GUIO" closed="true">
    <tags-item tags="guio"/>
  </def-label> 
  <def-label name="APOS" closed="true">
    <tags-item tags="apos"/>
  </def-label> 
  <def-mult name="DETPREADV" closed="true">  
    <sequence>
      <tags-item tags="det.def.sp"/>
      <label-item label="PREADV"/>
    </sequence>
</def-mult>

</tagset>

 <forbid>
    <label-sequence>
      <label-item label="ATP"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="OMTE"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="GE"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNALTRES"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNALTRES"/>
      <label-item label="NOMPL"/>
    </label-sequence>
   <label-sequence>
      <label-item label="VHAVEPP"/>
      <label-item label="PAST"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VHAVEPP"/>
      <label-item label="INF"/>
    </label-sequence>
  <!--   <label-sequence> Ho trec perquè ja hi ha un enforce-after que fa el mateix
      <label-item label="VHAVEPAST"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVEPAST"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVEINF"/>
      <label-item label="PAST"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VHAVEINF"/>
      <label-item label="INF"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VHAVEPRES"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVEPRES"/>
      <label-item label="INF"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VHAVE"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVE"/>
      <label-item label="INF"/>
    </label-sequence>-->

    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VMODPP"/>
    </label-sequence> 

    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="INF"/>
    </label-sequence>  
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VHAVEINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VMODINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="PAST"/>
    </label-sequence> 
     <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="INF"/>
    </label-sequence> 
     <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="PRES"/>
    </label-sequence>
     <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="VAUX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELAN"/>      
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELNN"/>      
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELADV"/>      
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="VAUX"/>      
    </label-sequence>
     <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="PAST"/>      
    </label-sequence>
     <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="INF"/>      
    </label-sequence>
     <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="PRES"/>      
    </label-sequence>
    <label-sequence><!--'Visitors who wanted to come', pq esculli el rel (no obstant, es farà malament: ask visitors who is the first) -->
      <label-item label="NOMSG"/>
      <label-item label="INTNOM"/>      
    </label-sequence>
    <label-sequence>
      <label-item label="NOMPL"/>
      <label-item label="INTNOM"/>      
    </label-sequence>

 <!--afegit MG 23/2/07 -->
    <label-sequence>
      <label-item label="NOMSG"/>
      <label-item label="PRNOBJ"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="NOMPL"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VLEXPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VSERPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VMODPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VLEXPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VSERPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VMODPP"/>
    </label-sequence>  
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VLEXPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VSERPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VMODPP"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="DOVBLEX"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="DOVBLEX"/>
      <label-item label="NIE"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="ADJPOS"/>
      <label-item label="NOMSG"/>
    </label-sequence> 
    <label-sequence>
      <label-item label="ADJPOS"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="OMTE"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VAUX"/>
    </label-sequence>
    <label-sequence><!--MG: soluciona "popular will." però no: yes, they will. Pensar-hi millor. -->
      <label-item label="VAUX"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DEURNOM"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NA"/>
      <label-item label="VLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NA"/>
      <label-item label="VAUX"/>
    </label-sequence>
 </forbid>

 <enforce-rules>

    <enforce-after label="VHAVEPAST">
      <label-set>
        <label-item label="VLEXPP"/>
        <label-item label="VSERPP"/>
	<label-item label="ADV"/>
	<label-item label="NIE"/>
	<label-item label="PRNSUBJ"/><!--per a interrogatives i altres inversions. Llavors caldria afegir més categories aquí o fer canvis en el transfer (had the man finished vs. they had the book) -->
	<label-item label="NIE"/>
      </label-set>
    </enforce-after>

    <enforce-after label="VHAVEINF">
      <label-set>
        <label-item label="VLEXPP"/>
        <label-item label="VSERPP"/>
	<label-item label="ADV"/>
      </label-set>
    </enforce-after>

    <enforce-after label="VHAVEPRES">
      <label-set>
        <label-item label="VLEXPP"/>
        <label-item label="VSERPP"/>
	<label-item label="ADV"/>
	<label-item label="NIE"/>
	<label-item label="PRNSUBJ"/><!--ídem més amunt -->
	<label-item label="NIE"/>
      </label-set>
    </enforce-after>

    <enforce-after label="VHAVE">
      <label-set>
        <label-item label="VLEXPP"/>
        <label-item label="VSERPP"/>
	<label-item label="NIE"/>
	<label-item label="ADV"/>
	<label-item label="NIE"/>
      </label-set>
    </enforce-after>

     <enforce-after label="PREDET">
      <label-set>
        <label-item label="NOMSG"/>
        <label-item label="NOMPL"/>
	<label-item label="ADJ"/>
	<label-item label="DET"/>
      </label-set>
    </enforce-after>
   
 </enforce-rules>


</tagger>
