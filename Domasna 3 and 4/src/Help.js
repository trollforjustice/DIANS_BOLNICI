const Help = ({lng}) => {
    return (
        <div className="help">
           {lng && <div>
                 <h1>Најчесто поставувани прашања</h1>
                <ol>
                    <li><h2>Како да ја најдам мојата локација?</h2></li>
                    <ul>
                        <li><h4>Со притискање на линкот "БОЛНИЦИ" се отвора страна за прикажување на мапата
                            и првично ви излегува прозорец за одобрување на вашата локација</h4></li>
                    </ul>
                    <li><h2>Како да знам која е најблиската болница?</h2></li>
                    <ul>
                        <li><h4>Со притискање на маркерите, се прикажува оддалеченоста од вас во километри</h4></li>
                    </ul>
                    <li><h2>Дали има и англиска поддршка на јазик?</h2></li>
                    <ul>
                        <li><h4>EN/MK копчето ви овозможува да ја преведете страницата</h4></li>
                    </ul>
                </ol>
            </div>} 
            {!lng && <div>
                 <h1>Frequently asked questions</h1>
                <ol>
                    <li><h2>How do I show my location</h2></li>
                    <ul>
                         <li><h4>By clicking on the "HOSPITALS" link, for showing the map, a prompt window pops up and
                        asks you to allow your location</h4></li>
                    </ul>
                    <li><h2>How do I find the nearest hospital</h2></li>
                    <ul>
                        <li><h4>When you click on a hospital markers, a window pops up with shown kilometers</h4></li>
                    </ul>
                    <li><h2>Is there a translation available for the website</h2></li>
                    <ul>
                        <li><h4>The EN/MK button allows you to translate the webpage </h4></li>
                    </ul>
                </ol>
            </div>} 
            
            
        </div>
      );
}
 
export default Help;