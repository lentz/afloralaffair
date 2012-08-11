// Created by iWeb 3.0.1 local-build-20091106

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.afloralaffairkc.com/A_Floral_Affair_-_Kansas_City/Portfolio/Pages/Purple_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.afloralaffairkc.com/A_Floral_Affair_-_Kansas_City/Portfolio/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.afloralaffairkc.com/A_Floral_Affair_-_Kansas_City/Portfolio/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(166,166),new IWSize(166,0),new IWSize(204,181),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Purple_files/PurpleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');IMpreload('Purple_files','shapeimage_2','0');IMpreload('Purple_files','shapeimage_3','0');IMpreload('Purple_files','shapeimage_4','0');IMpreload('Purple_files','shapeimage_5','0');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
