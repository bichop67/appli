import React from 'react';
import { StackNavigationProp } from 'react-nativescript-navigation';
import { EventData } from '../types';
import { FlexboxLayout, Label, Image, Button } from '@nativescript/core';

interface Props {
  event: EventData;
  navigation: StackNavigationProp<any, any>;
}

export function EventCard({ event, navigation }: Props) {
  return (
    <FlexboxLayout 
      className="bg-white m-2 rounded-lg elevation-2"
      flexDirection="column"
      padding={16}
    >
      {event.logo_url && (
        <Image
          src={event.logo_url}
          height={200}
          stretch="aspectFill"
          className="rounded-lg"
        />
      )}

      <Label 
        text={event.title}
        className="text-lg font-bold mt-2"
      />

      <Label 
        text={event.description}
        className="text-sm text-gray-600 mt-1"
        textWrap={true}
      />

      <FlexboxLayout className="mt-4" flexDirection="row" justifyContent="space-between">
        <Label 
          text={`${new Date(event.date).toLocaleDateString('fr-FR')} à ${event.time}`}
          className="text-sm text-gray-500"
        />
        <Label 
          text={`${event.price} €`}
          className="text-sm font-bold"
        />
      </FlexboxLayout>

      <Button
        text="Réserver"
        className="-primary mt-4"
        onTap={() => navigation.navigate('EventDetails', { event })}
      />
    </FlexboxLayout>
  );
}