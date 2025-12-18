import { Appointment as AppointmentPrisma } from '@/app/generated/prisma/browser';
import { AppointmentForm } from '@/components/appointment-form/appointment-form';
import { PeriodSection } from '@/components/period-section/period-section';
import {
  Appointment,
  AppointmentPeriod,
  AppointmentPeriodDay,
} from '@/types/appointment';

const appointments = [
  {
    id: '1',
    petName: 'Rex',
    description: 'Consulta',
    tutorName: 'João',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: '2',
    petName: 'Mimi',
    tutorName: 'Maria',
    description: 'Banho',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T11:00:00'),
  },
  {
    id: '3',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T14:00:00'),
  },
  {
    id: '4',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T19:00:00'),
  },
];

const getPeriod = (hour: number): AppointmentPeriodDay => {
  if (hour >= 9 && hour < 12) return 'morning';
  if (hour >= 13 && hour < 18) return 'afternoon';
  return 'evening';
};

function groupAppointmentByPeriod(
  appointments: AppointmentPrisma[]
): AppointmentPeriod[] {
  const transformedAppointments: Appointment[] = appointments?.map((apt) => ({
    ...apt,
    time: apt.scheduleAt.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    service: apt.description,
    period: getPeriod(apt.scheduleAt.getHours()),
  }));

  const morningAppointments = transformedAppointments.filter(
    (apt) => apt.period === 'morning'
  );
  const afternoonAppointments = transformedAppointments.filter(
    (apt) => apt.period === 'afternoon'
  );
  const eveningAppointments = transformedAppointments.filter(
    (apt) => apt.period === 'evening'
  );

  return [
    {
      title: 'Manhã',
      type: 'morning',
      timeRange: '09h-12h',
      appointments: morningAppointments,
    },
    {
      title: 'Tarde',
      type: 'afternoon',
      timeRange: '13h-18h',
      appointments: afternoonAppointments,
    },
    {
      title: 'Manhã',
      type: 'evening',
      timeRange: '19h-21h',
      appointments: eveningAppointments,
    },
  ];
}

export default function Home() {
  const periods = groupAppointmentByPeriod(appointments);

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between md:m-8">
        <div>
          <h1 className="text-title-size text-content-primary mb-2">
            Sua Agenda
          </h1>
          <p className="text-paragraph-medium-size text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>

      <div className="pb-24 md:pb-0">
        {periods.map((period, index) => (
          <PeriodSection period={period} key={index} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#23242C] py-[18px] px-6 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentForm />
      </div>
    </div>
  );
}
