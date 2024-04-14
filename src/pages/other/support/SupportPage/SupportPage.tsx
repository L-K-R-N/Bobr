import { useState } from 'react';
import cl from './SupportPage.module.scss';
import { Link } from 'react-router-dom';
import { ITicket, TicketItem } from '@/components/layout/TicketItem/TicketItem';
import { useHideFooter } from '@/hooks/useLayout';

interface Props {}

const SupportPage: React.FC<Props> = () => {
   const [tickets, setTickets] = useState<ITicket[]>([
      {
         id: 1,
         title: 'Название',
         date: '12.12.12, 12:12:03',
         status: 'new',
      },
   ]);

   useHideFooter();
   return (
      <div className={cl.ticketsHolder}>
         <div className={cl.headerBlock}>
            <div className={cl.titles}>
               <p className={cl.title}>Tickets</p>
               <div>
                  <p className={cl.description}>
                     Total tickets: <span>{tickets.length}</span>
                  </p>
               </div>
            </div>
            <Link to={'/createTicket'}>
               <div className={[cl.gradientButton, cl.purple].join(' ')}>
                  <div className={cl.gradientLayer}></div>
                  <div className={cl.hoverGradientLayer}></div>
                  <div className={cl.content}>
                     <p>New Ticket</p>
                  </div>
                  <div className={cl.tongue}></div>
                  <p>New Ticket</p>
               </div>
            </Link>
         </div>
         <div className={cl.ticketsTableHeader}>
            <div className={cl.idBlock}>#</div>
            <div className={cl.dateBlock}>Date</div>
            <div className={cl.titleBlock}>Title Ticket</div>
            <div className={cl.statusBlock}>Status</div>
         </div>
         <div className={cl.ticketsTable}>
            {tickets.map((ticket) => (
               <TicketItem data={ticket} key={ticket.id} />
            ))}
         </div>
         {/* <ChatList/>
            <MessageSection/> */}
      </div>
   );
};

export default SupportPage;
