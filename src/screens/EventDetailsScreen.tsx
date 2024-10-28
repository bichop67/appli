import React, { useState } from 'react';
import { ScrollView, FlexboxLayout, Label, Image, Button } from '@nativescript/core';
import { useRoute } from 'react-nativescript-navigation';
import { ReservationModal } from '../components/ReservationModal';
import { EventData } from '../types';

export function EventDetailsScreen() {
  const route = useRoute();
  const event = route.params?.event as EventData;
  const [showReservation, setShowReservation] = useState(false);

  return (
    <ScrollView>
      <FlexboxLayout flexDirection="column">
        {event.logo_url && (
          <Image
            src={event.logo_url}
            height={250}
            stretch="aspectFill"
          />
        )}

        <FlexboxLayout padding={16} flexDirection="column">
          <Label 
            text={event.title}
            className="text-2xl font-bold"
          />

          <Label 
            text={event.description}
            className="text-gray-600 mt-4"
            textWrap={true}
          />

          <FlexboxLayout className="mt-6" flexDirection="column">
            <Label 
              text="Informations"
              className="text-lg font-bold mb-2"
            />

            <FlexboxLayout className="mt-2" flexDirection="row" alignItems="center">
              <Label text="📅" className="mr-2" />
              <Label text={new Date(event.date).toLocaleDateString('fr-FR')} />
            </FlexboxLayout>

            <FlexboxLayout className="mt-2" flexDirection="row" alignItems="center">
              <Label text="⏰" className="mr-2" />
              <Label text={event.time} />
            </FlexboxLayout>

            <FlexboxLayout className="mt-2" flexDirection="row" alignItems="center">
              <Label text="📍" className="mr-2" />
              <Label text={event.address} textWrap={true} />
            </FlexboxLayout>

            <FlexboxLayout className="mt-2" flexDirection="row" alignItems="center">
              <Label text="💰" className="mr-2" />
              <Label text={`${event.price} €`} />
            </FlexboxLayout>
          </FlexboxLayout>

          <Button
            text="Réserver"
            className="-primary mt-8"
            onTap={() => setShowReservation(true)}
          />
        </FlexboxLayout>
      </FlexboxLayout>

      {showReservation && (
        <ReservationModal
          event={event}
          onClose={() => setShowReservation(false)}
        />
      )}
    </ScrollView>
  );
}